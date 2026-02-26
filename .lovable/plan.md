

## Show a Video Frame as Cover Image

### Approach

Append a timestamp fragment (`#t=2`) to the video source URL so the browser automatically displays the frame at the 2-second mark as a preview. Combined with `preload="metadata"`, this loads just enough data to show that frame without downloading the entire video.

### Technical Details

**File:** `src/pages/Careers.tsx`

1. Remove the empty `poster=""` attribute from the `<video>` element
2. Append `#t=2` to the video source URL so it reads:
   `...BER Recruitment Video updated.mp4#t=2`
3. This tells the browser to seek to 2 seconds and display that frame as the initial preview

If the 2-second mark isn't a good frame, the timestamp can be easily adjusted (e.g., `#t=5` for 5 seconds in).

