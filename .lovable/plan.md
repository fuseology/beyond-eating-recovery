

## Heading and Schema Audit for All Pages

### Summary of Findings

After reviewing all 47+ pages across the site, here is what was found:

---

### 1. Every Page Has a Single `<h1>` Tag (PASS)
All pages correctly use exactly one `<h1>` element -- this is essential for SEO and heading hierarchy. No pages have duplicate `<h1>` tags or missing `<h1>` tags.

---

### 2. BreadcrumbSchema Missing on 18 Pages

The `BreadcrumbSchema` component (which outputs structured `BreadcrumbList` JSON-LD data for Google) is included on all `about/*` and `conditions/*` subpages, but is **missing** on these top-level pages:

| Page | Route |
|------|-------|
| Index (Homepage) | `/` |
| About | `/about` |
| Services | `/services` |
| Conditions | `/conditions` |
| Philosophy | `/philosophy` |
| Health At Every Size | `/health-at-every-size` |
| Our Approach | `/our-approach` |
| Workshop | `/workshop` |
| Contact | `/contact` |
| Resources | `/resources` |
| FAQ | `/faq` |
| Careers | `/careers` |
| Privacy Notice | `/privacy-notice` |
| Secure File Submissions | `/secure-file-submissions` |
| Body Shame | `/body-shame` |
| Battle of the Binge | `/battle-of-the-binge` |
| 5 Steps Diet Roller Coaster | `/resources/5-steps-diet-roller-coaster` |
| Move Toward Your Emotions | `/resources/move-toward-your-emotions` |

**Note:** The Homepage (`/`) does not need breadcrumbs (the component already skips it). The remaining 17 pages should have `BreadcrumbSchema` added.

---

### 3. Missing Route Titles in BreadcrumbSchema

The `routeTitles` map in `BreadcrumbSchema.tsx` is missing entries for:
- `mackenzie-stracke` -- would fall back to "Mackenzie Stracke" (missing credentials)
- `move-toward-your-emotions` -- would fall back to "Move Toward Your Emotions" (acceptable, but should be explicit)

---

### Plan: Add BreadcrumbSchema to All Missing Pages

**Files to modify (17 pages):**

For each of the 17 non-homepage pages listed above:
1. Add `import BreadcrumbSchema from "@/components/BreadcrumbSchema";`
2. Add `<BreadcrumbSchema />` just before or after the `<Helmet>` block

**File to update (1 file):**

`src/components/BreadcrumbSchema.tsx`:
- Add `"mackenzie-stracke": "Mackenzie Stracke, MS, RDN"` to `routeTitles`
- Add `"move-toward-your-emotions": "Move Toward Your Emotions"` to `routeTitles`
- Add `"mackenzie-stracke"` with proper credentials

---

### Technical Details

Each page update is a small 2-line addition (import + component). The changes are purely additive and won't affect any visual rendering -- `BreadcrumbSchema` only outputs invisible JSON-LD structured data in the `<head>` for search engines.

**Files modified:** 18 total (17 pages + 1 schema component)
