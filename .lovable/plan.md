
Issue diagnosis:
- I reviewed `src/pages/Careers.tsx` and confirmed all 4 `JobPosting` entries currently use:
  - `jobLocationType: "TELECOMMUTE"`
  - `applicantLocationRequirements` as an array of two `AdministrativeArea` objects (`Oregon`, `Washington`).
- Your Search Console output shows exactly 2 critical errors per job posting for this field, which matches having 2 invalid entries in the array.
- For Google Job Posting rich results, telecommute jobs require `applicantLocationRequirements` with at least one `Country` object. While `AdministrativeArea` is allowed in broader schema.org vocabulary, Google’s validator is stricter here.

Implementation plan:
1. Update `src/pages/Careers.tsx` JSON-LD for all four `JobPosting` objects:
   - Replace:
     - `"applicantLocationRequirements": [ { "@type": "AdministrativeArea", ... }, { "@type": "AdministrativeArea", ... } ]`
   - With:
     - `"applicantLocationRequirements": { "@type": "Country", "name": "US" }`
   - Keep existing `jobLocation` entries for Portland (OR) and Vancouver (WA), which still communicate regional context.
2. Keep all other fields unchanged (titles, descriptions, datePosted, validThrough, employmentType, etc.) to minimize SEO churn.
3. Optional cleanup (recommended but non-blocking):
   - Add `baseSalary` to Associate Therapist and Wellness Practitioner to resolve the non-critical warning.

Validation plan after change:
1. Re-run Google Rich Results Test on:
   - `https://www.beyondeatingrecovery.com/careers`
2. Confirm each detected job no longer has:
   - `Invalid object type for field "applicantLocationRequirements"`
3. In Search Console, click “Validate Fix” after successful test.
4. If errors persist after code fix, check crawl lag/caching by waiting for recrawl and testing with live URL inspection again.

Technical details (exact target shape):
```json
"jobLocationType": "TELECOMMUTE",
"applicantLocationRequirements": {
  "@type": "Country",
  "name": "US"
}
```
