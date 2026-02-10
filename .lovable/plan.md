

## Replace "All Bodies, Identities & Experiences Welcome" Image

### What's Changing
The current stock image (`inclusive-therapy.jpg`) next to the diversity and inclusion section on the Careers page will be replaced with a newly generated image that better represents the message of welcoming all bodies, identities, and experiences.

### Approach
1. **Generate a new image** using AI image generation that depicts a diverse, welcoming group of professionals in a warm, collaborative setting -- reflecting varied body sizes, skin tones, gender expressions, and abilities in a therapeutic/wellness workplace context.
2. **Save the image** as `src/assets/inclusive-welcome.webp`.
3. **Update `src/pages/Careers.tsx`** to import and use the new image in place of `inclusiveTherapyImage` for that section (lines 158-164), with updated alt text.

### Technical Details

**File: `src/pages/Careers.tsx`**
- Update the import on line 17 to reference the new image file
- Update the `alt` attribute to better describe the new image content

No other files or pages are affected.

