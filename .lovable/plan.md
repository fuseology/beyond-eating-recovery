

## Remove Netlify `_redirects` File

Since the site is hosted on Vercel, the `public/_redirects` file serves no purpose -- it's a Netlify-specific convention. Vercel uses `vercel.json` for routing, which is already properly configured.

### Change

- **Delete `public/_redirects`** -- This file contains `/* /index.html 200` which is only used by Netlify for SPA routing. Vercel handles this via the `rewrites` section in `vercel.json`.

No other files need to change.

