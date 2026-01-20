// Sitemap Validation Script
// Run with: npx tsx scripts/validate-sitemap.ts
// Validates that all routes are properly configured

import { routes } from '../src/lib/routes';
import * as fs from 'fs';
import * as path from 'path';

interface ValidationResult {
  errors: string[];
  warnings: string[];
  info: string[];
}

function validateSitemap(): ValidationResult {
  const result: ValidationResult = {
    errors: [],
    warnings: [],
    info: []
  };

  console.log('🔍 Validating sitemap configuration...\n');

  // Check for duplicate paths
  const paths = routes.map(r => r.path);
  const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index);
  if (duplicates.length > 0) {
    result.errors.push(`Duplicate paths found: ${duplicates.join(', ')}`);
  }

  // Validate each route
  routes.forEach(route => {
    // Check source file exists
    if (route.sourceFile) {
      const fullPath = path.join(process.cwd(), route.sourceFile);
      if (!fs.existsSync(fullPath)) {
        result.errors.push(`Source file not found: ${route.sourceFile} (route: ${route.path})`);
      }
    } else {
      result.warnings.push(`No sourceFile mapped for route: ${route.path}`);
    }

    // Validate priority
    if (route.priority < 0 || route.priority > 1) {
      result.errors.push(`Invalid priority ${route.priority} for route: ${route.path}`);
    }

    // Check for trailing slashes (except root)
    if (route.path !== '/' && route.path.endsWith('/')) {
      result.warnings.push(`Trailing slash in path: ${route.path}`);
    }

    // Check path starts with /
    if (!route.path.startsWith('/')) {
      result.errors.push(`Path should start with /: ${route.path}`);
    }

    // Validate images
    if (route.images) {
      route.images.forEach(img => {
        if (!img.title) {
          result.warnings.push(`Image missing title in route: ${route.path}`);
        }
        if (!img.src) {
          result.errors.push(`Image missing src in route: ${route.path}`);
        }
      });
    }

    // Check lastmod format if provided
    if (route.lastmod && !/^\d{4}-\d{2}-\d{2}$/.test(route.lastmod)) {
      result.errors.push(`Invalid lastmod format (should be YYYY-MM-DD): ${route.lastmod} in ${route.path}`);
    }
  });

  // Summary statistics
  result.info.push(`Total routes: ${routes.length}`);
  result.info.push(`Routes with images: ${routes.filter(r => r.images && r.images.length > 0).length}`);
  result.info.push(`Routes with source files: ${routes.filter(r => r.sourceFile).length}`);
  result.info.push(`Routes with manual lastmod: ${routes.filter(r => r.lastmod).length}`);

  return result;
}

// Compare routes.ts with App.tsx routes
function findMissingRoutes(): string[] {
  const appTsxPath = path.join(process.cwd(), 'src/App.tsx');
  const missing: string[] = [];

  try {
    const appContent = fs.readFileSync(appTsxPath, 'utf-8');
    
    // Extract routes from App.tsx using regex
    const routeMatches = appContent.matchAll(/path="([^"]+)"/g);
    const appRoutes = new Set<string>();
    
    for (const match of routeMatches) {
      const routePath = match[1];
      if (routePath !== '*') {
        appRoutes.add(routePath);
      }
    }

    // Check which App.tsx routes are missing from routes.ts
    const sitemapPaths = new Set(routes.map(r => r.path));
    
    appRoutes.forEach(appRoute => {
      if (!sitemapPaths.has(appRoute)) {
        missing.push(appRoute);
      }
    });

    // Check for routes in sitemap but not in App.tsx
    sitemapPaths.forEach(sitemapPath => {
      if (!appRoutes.has(sitemapPath)) {
        console.log(`⚠️  Route in sitemap but not in App.tsx: ${sitemapPath}`);
      }
    });

  } catch (error) {
    console.log('Could not read App.tsx for comparison');
  }

  return missing;
}

// Run validation
const result = validateSitemap();
const missingFromSitemap = findMissingRoutes();

// Output results
console.log('📊 Validation Results:\n');

if (result.errors.length > 0) {
  console.log('❌ ERRORS:');
  result.errors.forEach(err => console.log(`   ${err}`));
  console.log('');
}

if (result.warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  result.warnings.forEach(warn => console.log(`   ${warn}`));
  console.log('');
}

if (missingFromSitemap.length > 0) {
  console.log('🔗 Routes in App.tsx missing from sitemap:');
  missingFromSitemap.forEach(route => console.log(`   ${route}`));
  console.log('');
}

console.log('ℹ️  INFO:');
result.info.forEach(info => console.log(`   ${info}`));
console.log('');

// Exit with error code if there are errors
if (result.errors.length > 0 || missingFromSitemap.length > 0) {
  console.log('❌ Validation failed with errors');
  process.exit(1);
} else if (result.warnings.length > 0) {
  console.log('⚠️  Validation passed with warnings');
  process.exit(0);
} else {
  console.log('✅ Validation passed!');
  process.exit(0);
}
