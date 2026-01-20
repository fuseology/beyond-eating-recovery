import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

import { execSync } from 'child_process';

// Get Git last modified date for a file
function getGitLastModified(filePath: string): string {
  try {
    const result = execSync(
      `git log -1 --format="%ad" --date=short -- "${filePath}"`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }
    ).trim();
    return result || new Date().toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

// Get project-wide last modified date as fallback
function getProjectLastModified(): string {
  try {
    const result = execSync(
      'git log -1 --format="%ad" --date=short',
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }
    ).trim();
    return result || new Date().toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

// Sitemap generator plugin with Git-based lastmod dates
function sitemapGenerator(): Plugin {
  return {
    name: 'sitemap-generator',
    writeBundle() {
      // Dynamic import to avoid issues during development
      import('./src/lib/routes').then(({ routes, SITE_URL }) => {
        const projectFallback = getProjectLastModified();
        
        const urlEntries = routes.map((route: { path: string; priority: number; changefreq: string; sourceFile?: string; lastmod?: string }) => {
          const loc = route.path === '/' ? SITE_URL + '/' : SITE_URL + route.path;
          
          // Priority: manual lastmod > git date > project fallback
          let lastmod = route.lastmod;
          if (!lastmod && route.sourceFile) {
            lastmod = getGitLastModified(route.sourceFile);
          }
          if (!lastmod) {
            lastmod = projectFallback;
          }
          
          return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
        }).join('\n');

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

        const outputPath = path.join(__dirname, 'dist', 'sitemap.xml');
        fs.writeFileSync(outputPath, sitemap, 'utf-8');
        console.log(`✓ Sitemap generated with ${routes.length} URLs (using Git-based lastmod dates)`);
      }).catch(err => {
        console.warn('Could not generate sitemap:', err.message);
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && sitemapGenerator(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Add content hash to all assets for cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
}));
