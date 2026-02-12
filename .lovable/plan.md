

## Remove Alyssa Pataki from the Site

### Overview

Remove Alyssa Pataki's individual bio page and all references to her across the site -- navigation, About page team listing, structured data, route configuration, and sitemap.

### Changes by File

**1. `src/components/Header.tsx`** -- Remove from navigation
- Remove `{ title: "Alyssa Pataki, MA, LMFT", href: "/about/alyssa-pataki" }` from the `aboutLinks` array (line 23)

**2. `src/pages/About.tsx`** -- Remove from About page
- Remove the `import alyssaPataki` image import (line 13)
- Remove her entry from the `"employee"` array in structured data (line 105)
- Remove her entry from the `teamMembers` array (lines 148-153)

**3. `src/App.tsx`** -- Remove route
- Remove the `import AlyssaPataki` statement (line 24)
- Remove the `<Route path="/about/alyssa-pataki" .../>` (line 70)

**4. `src/lib/routes.ts`** -- Remove from sitemap config
- Remove the `'alyssa-pataki'` entry from `teamImages` (around line 30)
- Remove the route config entry for `/about/alyssa-pataki` (around line 82)

**5. `src/pages/about/AlyssaPataki.tsx`** -- Delete the page file entirely

Note: The image file `src/assets/alyssa-pataki.webp` will remain in the repo (unused) but won't be referenced anywhere. It can be cleaned up separately if desired.

