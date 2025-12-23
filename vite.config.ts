import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Sitemap generator plugin
function sitemapGenerator(): Plugin {
  return {
    name: 'sitemap-generator',
    writeBundle() {
      // Dynamic import to avoid issues during development
      import('./src/lib/routes').then(({ routes, SITE_URL }) => {
        const today = new Date().toISOString().split('T')[0];
        
        const urlEntries = routes.map((route: { path: string; priority: number; changefreq: string }) => {
          const loc = route.path === '/' ? SITE_URL + '/' : SITE_URL + route.path;
          return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
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
        console.log(`✓ Sitemap generated with ${routes.length} URLs`);
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
