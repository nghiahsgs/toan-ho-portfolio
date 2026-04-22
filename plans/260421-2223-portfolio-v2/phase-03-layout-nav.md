---
phase: 03
name: layout-nav
effort_hours: 0.5
---

# Phase 03 — Layout metadata & numbered nav

## Goal
Update document metadata to the Product Designer pivot and replace the existing site-nav with a slim, print-folio style numbered top bar that gains a blur backdrop on scroll.

## Files to touch
- `app/layout.tsx` — metadata only (keep font wiring from phase 01)
- `components/site-nav.tsx` (full rewrite)

## Metadata
- `title: 'Toan Ho — Product Designer'`
- `description: 'Designer dựng trải nghiệm số ở Sài Gòn. Product design, brand systems, editorial & design systems.'`
- `openGraph.title` + `twitter.title` match

## Nav spec
- NOT `fixed` by default — render as normal top-of-document slim bar, then switch to `position: sticky; top: 0` with `backdrop-filter: blur(14px)` + `border-bottom: 1px solid var(--color-rule)` once `window.scrollY > 24` (track with a small `useEffect` in a client component)
- Left: brand "TOAN HO" in JetBrains Mono, tracked `.18em`, uppercase, 13px
- Right: four anchors `01 WORK`, `02 ABOUT`, `03 SELECTED`, `04 CONTACT` — mono, uppercase, gap 32px
- Active anchor (matches current section via `IntersectionObserver`) gets a 1px neon underline directly below text — the ONLY neon on the bar
- Height ~56px; padding `px-6 md:px-10 lg:px-16` to match layout gutters
- No logo SVG, no hamburger menu, no CTA button in the bar

## Acceptance criteria
- Bar sits flush at page top, no shadow, no fill until scroll.
- After scrolling >24px the bar gains a blur + hairline rule — verifiable in DevTools.
- Exactly one neon underline is visible at a time (current section).
- All nav text renders in JetBrains Mono uppercase, never serif, never Geist.
- Tab key reaches brand → 4 anchors → skip-link target in DOM order.
