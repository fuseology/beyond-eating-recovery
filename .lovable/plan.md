

## Rewrite "Fair Pay" Section for 1099 Contractors

### What's Changing

Updating the heading and body copy in the "Fair Pay & Comprehensive Benefits" block on the Careers page to reflect a 1099 independent contractor arrangement rather than a W-2 employee benefits package.

### Current Copy

> **Fair Pay & Comprehensive Benefits**
>
> Competitive fee-for-service compensation, health insurance contribution, paid sick time, furnished offices, full administrative support, professional liability insurance, and more. We believe in compensating practitioners fairly for their expertise and time.

### Proposed New Copy

> **Competitive Compensation & Practice Support**
>
> As independent contractors, our practitioners enjoy competitive fee-for-service compensation with the flexibility and autonomy that comes with 1099 status. We provide furnished office space, full administrative and billing support, and a collaborative clinical community — so you can focus on what you do best. We believe in valuing practitioners fairly for their expertise and time.

Key changes:
- Removed W-2-style benefits language (health insurance contribution, paid sick time, professional liability insurance) that could create misclassification risk.
- Added language emphasizing flexibility, autonomy, and 1099 status explicitly.
- Retained furnished offices, administrative support, and fair compensation messaging.
- Updated the heading from "Fair Pay & Comprehensive Benefits" to "Competitive Compensation & Practice Support" to avoid implying employee benefits.

### Technical Details

**File:** `src/pages/Careers.tsx` (lines 179-184)

- Update the `<h3>` text (line 180) with the new heading.
- Update the `<p>` text (line 183) with the new body copy.
- No structural or styling changes needed.

