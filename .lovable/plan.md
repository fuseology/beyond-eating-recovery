

# 2026 Schema & SEO Audit — Gaps and Remediation Plan

## Current State Summary

The site already has strong SEO foundations:
- Sitemap system (dynamic, Git-based lastmod)
- Canonical tags on major pages
- BreadcrumbList schema on all interior pages
- LocalBusiness schema (2 locations) on homepage
- MedicalOrganization + WebSite schema on homepage
- Person schema on all team member pages
- FAQPage schema on FAQ page
- JobPosting schema on Careers page
- MedicalCondition schema on condition pages
- Book, Course, AggregateRating schemas
- Open Graph + Twitter meta on most pages
- Clean URL routing via React Router

## Gaps Identified (prioritized)

### 1. Remove Deprecated SearchAction (Critical)
The homepage WebSite schema includes a `SearchAction` targeting `/search?q=...` — but the site has no search functionality. Google deprecated Sitelinks Search Box as of Jan 2026. This should be removed to avoid schema-content mismatch penalties.

**File:** `src/pages/Index.tsx` — Remove the `potentialAction` block from the WebSite schema entry.

### 2. Add AI Bot Directives to robots.txt (High)
The prompt requires explicitly allowing AI crawlers. Currently missing: `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `GPTBot`.

**File:** `public/robots.txt` — Add explicit `User-agent` + `Allow: /` blocks for each AI bot before the catch-all `*` rule.

### 3. Add `contactPoint` to Homepage Organization Schema (Medium)
The homepage `MedicalOrganization` schema lacks a `contactPoint`. The About and Contact pages have it, but Google's 2026 guidelines want it on the primary Organization entity.

**File:** `src/pages/Index.tsx` — Add `contactPoint` with telephone and `contactType: "customer service"` to the MedicalOrganization entry.

### 4. Add `sameAs` to Homepage Organization Schema (Medium)
The homepage Organization schema is missing `sameAs` links (Facebook, Instagram, LinkedIn, YouTube are in `NAP_DATA.socialMedia` but not referenced in the Organization block — only in the LocalBusiness blocks).

**File:** `src/pages/Index.tsx` — Add `"sameAs": Object.values(NAP_DATA.socialMedia)` to the MedicalOrganization entry.

### 5. Fix `@type: "State"` in Homepage `areaServed` (Low-Medium)
The homepage Organization uses `@type: "State"` which, like the JobPosting issue, could cause validation warnings. Should use `AdministrativeArea`.

**File:** `src/pages/Index.tsx` — Change `"@type": "State"` to `"@type": "AdministrativeArea"` in the `areaServed` blocks.

### 6. Fix Phone Number in Services.tsx (Low)
Services page uses a different phone number (`+1-503-868-9434`) than the canonical one (`+1-360-726-4141`). This NAP inconsistency hurts local SEO.

**File:** `src/pages/Services.tsx` — Replace with `NAP_DATA.phoneInternational` and use NAP_DATA for address.

---

## What's Already Correct (No Changes Needed)

| Requirement | Status |
|---|---|
| Dynamic sitemap.xml | Done (Vite plugin + routes.ts) |
| Canonical tags | Done on all major pages |
| Clean hyphenated URLs | Done |
| react-helmet for dynamic meta | Done |
| OG/Twitter meta per page | Done on key pages |
| BreadcrumbList schema | Done (auto-generated) |
| FAQPage schema | Done (FAQ page only) |
| LocalBusiness schema | Done (2 locations) |
| Organization/WebSite schema | Done |
| Person schema for team | Done |
| Semantic HTML structure | Done (header, main, section, footer) |

## Files to Change: 3

| File | Changes |
|---|---|
| `src/pages/Index.tsx` | Remove SearchAction; add contactPoint + sameAs to Organization; fix State to AdministrativeArea |
| `public/robots.txt` | Add AI bot directives |
| `src/pages/Services.tsx` | Fix phone number NAP inconsistency |

