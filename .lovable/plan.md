

# Fix JobPosting Schema Errors

## Problem
Google reports "Invalid object type for field `applicantLocationRequirements`" because the schema uses `"@type": "State"` which is not a valid Schema.org type. Google expects `"@type": "AdministrativeArea"`.

## Changes

**File: `src/pages/Careers.tsx`**

1. Replace all `"@type": "State"` with `"@type": "AdministrativeArea"` in the `applicantLocationRequirements` arrays (affects 3 job postings -- Licensed Therapist, Associate Therapist, and Registered Dietitian).

2. Add `applicantLocationRequirements` to the 4th job posting (Wellness Practitioner) which is currently missing it entirely:
```json
"applicantLocationRequirements": [
  { "@type": "AdministrativeArea", "name": "Oregon" },
  { "@type": "AdministrativeArea", "name": "Washington" }
]
```

This resolves all 7 critical errors flagged by Google's rich results test.

