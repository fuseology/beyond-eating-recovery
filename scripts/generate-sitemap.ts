// Sitemap generator script
// Run with: npx tsx scripts/generate-sitemap.ts
// Generates both URL sitemap and Image sitemap

import { routes, SITE_URL, getAllImages } from '../src/lib/routes';
import * as fs from 'fs';
import * as path from 'path';

const today = new Date().toISOString().split('T')[0];

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
  // Convert /src/assets/image.jpg to https://site.com/assets/image.jpg
  // Note: In production, Vite bundles these with hashes. For sitemap purposes,
  // we use a consistent path that should be set up with redirects or copied to public
  const filename = assetPath.split('/').pop() || '';
  return `${SITE_URL}/assets/${filename}`;
}

// Generate main URL sitemap with embedded images
function generateUrlSitemap(): string {
  const urlEntries = routes.map(route => {
    const loc = route.path === '/' ? SITE_URL + '/' : SITE_URL + route.path;
    
    let imageEntries = '';
    if (route.images && route.images.length > 0) {
      imageEntries = route.images.map(img => `
      <image:image>
        <image:loc>${escapeXml(assetToUrl(img.src))}</image:loc>
        <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `
        <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
      </image:image>`).join('');
    }
    
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>${imageEntries}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

// Generate standalone image sitemap
function generateImageSitemap(): string {
  const allImages = getAllImages();
  
  const imageEntries = allImages.map(({ pageUrl, image }) => {
    const loc = pageUrl === '/' ? SITE_URL + '/' : SITE_URL + pageUrl;
    
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
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

// Generate and write all sitemaps
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

console.log('\nAll sitemaps generated successfully!');
console.log(`  - ${SITE_URL}/sitemap.xml (main + images)`);
console.log(`  - ${SITE_URL}/sitemap-images.xml (images only)`);
console.log(`  - ${SITE_URL}/sitemap-index.xml (index)`);
