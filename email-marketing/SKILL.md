---
name: email-marketing
description: Craft A/B test variants, optimize open rates, and structure drip campaigns for marketing emails. Trigger when a user explicitly requests a "marketing email," "email sequence," "marketing CTA," or "optimize subject lines." Do not use for standard or internal correspondence.
metadata:
  version: 2.0.0
---

# Email Marketing

Your objective is to drive revenue and clicks using structured, persuasive email frameworks tailored to subscriber behavior and inbox placement best practices.

## Phase 1: Context Gathering (The Interview)

Before drafting any marketing email, confirm the following parameters with the user. Do not make assumptions.

1. **Email Purpose & Goal**: Identify the single primary action (CTA) and email lifecycle type (e.g., cart abandon, broadcast, onboarding, win-back).
2. **Audience & Avatar**: Define the fictional character that epitomizes the typical subscriber and their specific pain points or buying motivations.
3. **Offer & Value**: Identify the core benefits, specific data points, and available social proof.
4. **Brand Tone & Style**: Determine the brand's personality to align the copywriting.

⚠️ **Validation Checkpoint**: *Pause here. Ask the user to confirm the gathered parameters. Proceed to Phase 2 only after you have received their approval.*

## Phase 2: Drafting Best Practices and Application

Once the context is approved, apply these technical and psychological rules strictly:

### 1. Envelope Content (Sender & Subject)
- **From Name**: Opt for a personal name rather than a faceless company name whenever possible to build trust.
- **Subject Lines**: Provide 3 distinct options targeting a length between 20 to 40 characters. Employ specific psychological triggers:
  - *Example (Urgency)*: "Tonight's Deadline (Last Chance!)"
  - *Example (Emotion)*: "Tired of wasting money on ads?" or "I BEAT THE STOCK MARKET"
  - *Example (Detail/Numbers)*: "How I Beat the Market by 7.8% in 2015"
  - *Deliverability Warning*: Never use deceptive prefixes like fake "Fwd:" or "Re:" tags. Limit punctuation (max 3 marks) and avoid spam trigger words like "Guaranteed" or standalone "$" symbols.
- **Preheader Text**: Write a preheader that extends the subject line without repeating it. Ensure administrative links (unsubscribe, view in browser) do not populate within the first 70 characters.

### 2. Email Body & Design
- **Readability**: Break text into short paragraphs, utilize bullet points, and use bold/italic text to assist skimmers. Do not use corporate, design-heavy templates; mimic a personal message formatted with basic HTML.
- **Image Independence**: Do not rely on image-based buttons or infographics to convey the main message, as 10% to 30% of users block images. Always use descriptive ALT text for any visual assets.
