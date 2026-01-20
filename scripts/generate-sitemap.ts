// Enhanced Sitemap generator script with Git-based lastmod dates
// Run with: npx tsx scripts/generate-sitemap.ts
// Generates URL sitemap, Image sitemap, and Sitemap index

import { routes, SITE_URL, getAllImages } from '../src/lib/routes';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const today = new Date().toISOString().split('T')[0];

// Get the last modified date from Git for a specific file
function getGitLastModified(filePath: string): string {
  try {
    const result = execSync(
      `git log -1 --format="%ad" --date=short -- "${filePath}"`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }
    ).trim();
    return result || today;
  } catch {
    return today;
  }
}

// Get the most recent commit date in the entire project (fallback)
function getProjectLastModified(): string {
  try {
    const result = execSync(
      'git log -1 --format="%ad" --date=short',
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }
    ).trim();
    return result || today;
  } catch {
    return today;
  }
}

// Escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Convert asset path to public URL
function assetToUrl(assetPath: string): string {
  const filename = assetPath.split('/').pop() || '';
  return `${SITE_URL}/assets/${filename}`;
}

// Get lastmod for a route (priority: manual > git > project fallback)
function getRouteLastmod(route: typeof routes[0], projectFallback: string): string {
  // Priority 1: Manual override
  if (route.lastmod) {
    return route.lastmod;
  }
  
  // Priority 2: Git-based date from source file
  if (route.sourceFile) {
    const gitDate = getGitLastModified(route.sourceFile);
    if (gitDate !== today) {
      return gitDate;
    }
  }
  
  // Priority 3: Project-wide fallback
  return projectFallback;
}

// Generate main URL sitemap with embedded images and hreflang
function generateUrlSitemap(): string {
  const projectFallback = getProjectLastModified();
  
  const urlEntries = routes.map(route => {
    const loc = route.path === '/' ? SITE_URL + '/' : SITE_URL + route.path;
    const lastmod = getRouteLastmod(route, projectFallback);
    
    let imageEntries = '';
    if (route.images && route.images.length > 0) {
      imageEntries = route.images.map(img => `
      <image:image>
        <image:loc>${escapeXml(assetToUrl(img.src))}</image:loc>
        <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `
        <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
      </image:image>`).join('');
    }
    
    // Hreflang entries for US English and default
    const hreflangEntries = `
    <xhtml:link rel="alternate" hreflang="en-US" href="${escapeXml(loc)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(loc)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(loc)}" />`;
    
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>${hreflangEntries}${imageEntries}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

// Generate standalone image sitemap
function generateImageSitemap(): string {
  const allImages = getAllImages();
  const projectFallback = getProjectLastModified();
  
  const imageEntries = allImages.map(({ pageUrl, image }) => {
    const loc = pageUrl === '/' ? SITE_URL + '/' : SITE_URL + pageUrl;
    const route = routes.find(r => r.path === pageUrl);
    const lastmod = route ? getRouteLastmod(route, projectFallback) : projectFallback;
    
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <image:image>
      <image:loc>${escapeXml(assetToUrl(image.src))}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>${image.caption ? `
      <image:caption>${escapeXml(image.caption)}</image:caption>` : ''}
    </image:image>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries}
</urlset>`;
}

// Generate sitemap index
function generateSitemapIndex(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-images.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Main execution
console.log('🚀 Starting sitemap generation...\n');

const publicDir = path.join(process.cwd(), 'public');

// Main sitemap with images embedded
const urlSitemap = generateUrlSitemap();
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), urlSitemap, 'utf-8');
console.log(`✓ Main sitemap generated with ${routes.length} URLs`);

// Standalone image sitemap
const imageSitemap = generateImageSitemap();
fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), imageSitemap, 'utf-8');
const imageCount = getAllImages().length;
console.log(`✓ Image sitemap generated with ${imageCount} images`);

// Sitemap index
const sitemapIndex = generateSitemapIndex();
fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex, 'utf-8');
console.log(`✓ Sitemap index generated`);

console.log('\n📁 All sitemaps generated successfully!');
console.log(`  - ${SITE_URL}/sitemap.xml (main + images)`);
console.log(`  - ${SITE_URL}/sitemap-images.xml (images only)`);
console.log(`  - ${SITE_URL}/sitemap-index.xml (index)`);
console.log('\n💡 Tip: Run "npx tsx scripts/validate-sitemap.ts" to validate routes');
