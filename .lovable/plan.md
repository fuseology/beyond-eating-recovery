## Remove Annie Calhoun Randall from the site

Remove her page, route, nav entry, and all mentions.

### Changes

1. **Delete page file**
   - `src/pages/about/AnnieCalhounRandall.tsx`

2. **`src/App.tsx`** — remove the import and `/about/annie-calhoun-randall` route.

3. **`src/components/Header.tsx`** — remove her entry from the top nav "About" dropdown / team submenu.

4. **`src/pages/About.tsx`** — remove her team card/bio section.

5. **`src/lib/routes.ts`** — remove her route entry.

6. **`src/components/Breadcrumbs.tsx` & `BreadcrumbSchema.tsx`** — remove any label mapping for her slug.

7. **`src/pages/NotFound.tsx`** — remove any suggested link referencing her.

8. **`src/pages/about/SaraKranich.tsx`** — remove any cross-reference/mention of Annie.

9. **Sitemaps** — remove her URL from `public/sitemap.xml` and `public/sitemap-images.xml` (the sitemap generator script will also regenerate these on next build, but I'll strip current entries too).

### Verification
Run `rg -i "annie|calhoun|randall" .` after edits to confirm zero remaining references, then confirm the build passes.
