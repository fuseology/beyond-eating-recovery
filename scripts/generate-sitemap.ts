// Sitemap generator script
// Run with: npx tsx scripts/generate-sitemap.ts

import { routes, SITE_URL } from '../src/lib/routes';
import * as fs from 'fs';
import * as path from 'path';

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urlEntries = routes.map(route => {
    const loc = route.path === '/' ? SITE_URL + '/' : SITE_URL + route.path;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Generate and write the sitemap
const sitemap = generateSitemap();
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap, 'utf-8');
console.log(`✓ Sitemap generated with ${routes.length} URLs at ${outputPath}`);
