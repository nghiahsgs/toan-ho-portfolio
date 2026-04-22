---
phase: 06
name: contact-footer
effort_hours: 0.5
---

# Phase 06 — Contact & footer

## Goal
Close the page with an oversized serif call-to-collaborate, a huge email link as the visual anchor, a mono socials row, and a pin-thin footer rule.

## Files to touch
- `components/sections/contact.tsx` (full rewrite)
- `components/site-footer.tsx` (full rewrite)

## Contact spec
- Section padding `py-40 md:py-56`
- `.label-mono` eyebrow: `GET IN TOUCH / 04`
- H2 Fraunces weight 600, clamp(3rem, 9vw, 8rem), left-aligned: `"Hãy cộng tác."`
- Below H2, a huge email `<a>` in Fraunces weight 500, clamp(2rem, 5vw, 4.5rem), color ink, `hello@toanho.design`
  - On hover: neon 2px underline slides in L→R (keyframe), color stays ink (NOT neon text)
- Socials row below, mono uppercase `.label-mono`, gap 32px, each item is `LABEL ↗` (e.g. `INSTAGRAM ↗`, `BEHANCE ↗`, `READ.CV ↗`, `EMAIL ↗`)
  - Each link: underline offset 6px, 1px ink hairline; hover swaps hairline to neon
- No form, no reCAPTCHA, no "Send message" button

## Footer spec
- Full-width 1px `var(--color-rule)` top border
- Flex row, `py-6 px-6 md:px-10 lg:px-16`, justify-between
- Left: `.label-mono` `© 2025 · TOAN HO · HCMC`
- Right: `.label-mono` `BUILT WITH NEXT · DESIGNED IN FIGMA`
- No social icons here (already in contact), no nav links, no back-to-top button

## Acceptance criteria
- The email link is the largest non-H2 text in the section and sits at ≥2rem on mobile, ≥4rem on desktop.
- Hover on the email produces a neon underline only — the letters themselves remain warm ink.
- Socials read as a horizontal mono row, uppercase, each ending in `↗`.
- Footer is a single thin hairline rule + one row of mono metadata; no logo, no column stacks.
- Neon still budgeted <5% of the viewport at this section.
