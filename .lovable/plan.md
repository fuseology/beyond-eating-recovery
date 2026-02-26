

# Robots.txt and Schema Audit Results

## Robots.txt Status

The `robots.txt` file is properly configured and accessible. No code issues found -- the "unreachable" error in Google Search Console is a transient crawl issue (confirmed accessible via browser). The file correctly references all three sitemaps and specifies the canonical domain.

**One minor note:** Google officially ignores `Crawl-delay` directives. They don't cause harm, but they also have no effect on Googlebot. No change needed.

---

## Schema Issues Found

### Issue 1: Non-www Canonical URLs (4 pages)

These pages use `https://beyondeatingrecovery.com` instead of the canonical `https://www.beyondeatingrecovery.com`:

| Page | File |
|------|------|
| Conditions | `src/pages/Conditions.tsx` |
| Services | `src/pages/Services.tsx` |
| Privacy Notice | `src/pages/PrivacyNotice.tsx` |
| Secure File Submissions | `src/pages/SecureFileSubmissions.tsx` |

The Conditions page also uses the non-www domain inside its structured data JSON-LD (`@id` and `url` fields).

**Fix:** Update all 4 canonical URLs and the Conditions schema URLs to use `www.beyondeatingrecovery.com`.

---

### Issue 2: Missing Canonical Tags (8+ pages)

These pages have no `<link rel="canonical">` tag at all:

| Page | File |
|------|------|
| Careers | `src/pages/Careers.tsx` |
| Workshop | `src/pages/Workshop.tsx` |
| Philosophy | `src/pages/Philosophy.tsx` |
| Health At Every Size | `src/pages/HealthAtEverySize.tsx` |
| Our Approach | `src/pages/OurApproach.tsx` |
| Resources | `src/pages/Resources.tsx` |
| Exercise Addiction | `src/pages/conditions/ExerciseAddiction.tsx` |
| Emotional Eating | `src/pages/conditions/EmotionalEating.tsx` |

**Fix:** Add `<link rel="canonical" href="https://www.beyondeatingrecovery.com/[path]" />` to each.

---

### Issue 3: Missing Helmet Tags Entirely (2 pages)

These pages have no `<Helmet>` component at all, meaning no title, description, or canonical tag:

| Page | File |
|------|------|
| Our Approach | `src/pages/OurApproach.tsx` |
| Health At Every Size | `src/pages/HealthAtEverySize.tsx` |

**Fix:** Add full `<Helmet>` blocks with title, meta description, canonical, OG tags, and Twitter tags.

---

### Issue 4: Missing Title/Description in Careers Page

The Careers page has a `<Helmet>` but it only contains the JobPosting schema JSON-LD -- no `<title>`, no `<meta name="description">`, and no canonical URL.

**Fix:** Add title, description, canonical, and OG/Twitter meta tags.

---

## Summary of Changes

| # | Change | Files affected |
|---|--------|---------------|
| 1 | Fix non-www canonical URLs | `Conditions.tsx`, `Services.tsx`, `PrivacyNotice.tsx`, `SecureFileSubmissions.tsx` |
| 2 | Fix non-www schema URLs in Conditions structured data | `Conditions.tsx` |
| 3 | Add missing canonical tags | `Careers.tsx`, `Workshop.tsx`, `Philosophy.tsx`, `Resources.tsx`, `ExerciseAddiction.tsx`, `EmotionalEating.tsx` |
| 4 | Add full Helmet blocks (title, description, canonical, OG) | `OurApproach.tsx`, `HealthAtEverySize.tsx` |
| 5 | Add title/description/canonical to Careers | `Careers.tsx` |

**Total files to update: 10**

All existing schemas (JobPosting, FAQPage, MedicalCondition, Book, Course, AggregateRating, LocalBusiness, BreadcrumbList) are structurally valid. The only issues are the canonical URL inconsistencies and missing meta tags listed above.

