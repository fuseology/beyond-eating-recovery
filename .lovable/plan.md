
# Make Careers Page Video Container Larger

## Change

**File: `src/pages/Careers.tsx`**

Update the hero section grid layout from a 50/50 split to give more space to the video, and increase the max-width of the container:

1. Change `max-w-6xl` to `max-w-7xl` on the hero container (line 197)
2. Change the grid from `md:grid-cols-2` to `md:grid-cols-[2fr_3fr]` so the video gets ~60% of the width (line 198)
3. Add `min-h-[350px] md:min-h-[450px]` to the video container div for a taller minimum height (line 217)

This keeps the side-by-side layout but gives the video more visual prominence.
