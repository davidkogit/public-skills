---
name: email-marketing
description: Craft A/B test variants, optimize open rates, and structure drip campaigns for marketing emails. Trigger when a user explicitly requests a "marketing email," "email sequence," "marketing CTA," or "optimize subject lines." Do not use for standard or internal correspondence.
metadata:
  version: 1.4.0
---

# Email Marketing Copywriter

## Phase 1: Context Gathering (The Interview)

Before drafting any marketing email, confirm the following parameters with the user:

1. **Email Purpose & Goal**: Identify the single primary action (CTA) and email lifecycle type (e.g., cart abandonment, win-back, promotional broadcast).
2. **Audience & Avatar**: Define the fictional character that epitomizes the typical subscriber and their specific pain points.
3. **Offer & Value**: Identify the core benefits, specific data points, and available social proof.
4. **Brand Tone & Style**: Determine the brand's personality to align copywriting.

## Phase 2: Drafting Best Practices

Apply the following structural and psychological rules strictly:

### Envelope Content (Sender, Subject, Preheader)
- **From Name**: Opt for a personal name rather than a faceless company name whenever possible.
- **Subject Lines**: 
  - Provide 3 distinct options targeting different psychological triggers (e.g., emotion, urgency, detail).
  - Use specific numbers with decimals (e.g., 23.6%) to imply data accuracy.
  - Utilize ellipses (...) to imply more information inside, or brackets to communicate dual benefits.
  - Never use deceptive prefixes like fake "Fwd:", "Re:", or falsely alarming words like "Oops" if the email is not a genuine forward, reply, or correction.
- **Preheader Text**:
  - Write preheader text that extends and supports the subject line without repeating it verbatim.
  - Ensure administrative links (unsubscribe, view in browser) do not populate within the first 70 characters of the preheader.

### Email Body, CTAs, & Design
- **Structure**: Always use HTML formatting. Break text into short paragraphs, utilize bullet points, and use bold/italic text to assist skimmers. Avoid highly corporate, design-heavy templates; mimic the look of a personal message.
- **Bulletproof Buttons**: Do not rely on image-based buttons (10% to 30% of users block images). Build "bulletproof buttons" using styled HTML text inside table cells with background colors. Always use descriptive ALT text for visual assets.
- **Hyperlink Placement**: You must include exactly three hyperlinks pointing to the single primary CTA:
  1. Linked to relevant text early in the first paragraph.
  2. As a standalone button or clear link at the bottom of the main message body.
  3. Placed below the signature inside the postscript (P.S.).

### Compliance (Anti-Spam)
- The footer of the email must account for legal compliance, including clearly visible opt-out/unsubscribe instructions and a valid physical postal address for the sender.

## Output Format

Do not generate the draft freely. You must structure your final output exactly as defined in TEMPLATE.md and adhere to the guidelines in references/best-practices.md
