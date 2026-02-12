

## Add BA in Integrative Studies to Mackenzie Stracke's Education

### What's Changing

Adding Mackenzie's Bachelor of Arts in Integrative Studies (Psychology, Marketing, and Communications) to the Education & Training section on her bio page.

### Current Education Section

- Master of Arts in Counseling (In Progress) — Western Seminary

### Proposed Addition

Add a second entry beneath the existing one:

- **Bachelor of Arts in Integrative Studies (Psychology, Marketing, and Communications)**

### Technical Details

**File:** `src/pages/about/MackenzieStracke.tsx` (around lines 193-199)

Inside the Education card's `space-y-3` div, add a new `<div>` block after the existing MA entry:

```
<div>
  <p className="font-semibold">Bachelor of Arts in Integrative Studies</p>
  <p className="text-muted-foreground">Psychology, Marketing, and Communications</p>
</div>
```

This follows the same pattern used for the MA entry (bold degree name, muted subtitle). No other changes needed.

Additionally, update the JSON-LD structured data `alumniOf` field (around line 65) from a single object to an array to include both institutions (if the undergraduate institution is known — otherwise just the degree text can be added to the `knowsAbout` or `description` fields).

