

## Expand the Final CTA Section Body Copy

### What's Changing

Expanding the paragraph under "Ready to Begin Your Recovery Journey?" in `src/components/FinalCTASection.tsx` (line 26-28) with warm, reassuring language that emphasizes empathy, no judgment, and that recovery is personal.

### Proposed New Copy

The current single sentence:

> Schedule a free consultation with our compassionate team. We're here to help you heal your relationship with food and your body.

Will be expanded to something like:

> We understand that reaching out can feel overwhelming -- and that's okay. Our compassionate team meets you exactly where you are, without judgment. Whether you're just beginning to explore your relationship with food or you've been navigating these struggles for years, you deserve thoughtful, individualized support. Recovery looks different for everyone, and we're here to walk alongside you at your own pace. Schedule a free consultation to take that first step.

**Important:** All language avoids outcome-guaranteeing words (no "proven," "guarantee," etc.) per legal requirements. Words like "compassionate," "thoughtful," and "individualized" are used instead.

### Technical Details

**File:** `src/components/FinalCTASection.tsx` (lines 26-28)

Replace the single `<p>` tag content with the expanded copy. No structural or styling changes needed -- the existing `text-lg text-foreground/80 mb-8 leading-relaxed` classes will handle the longer text gracefully.

