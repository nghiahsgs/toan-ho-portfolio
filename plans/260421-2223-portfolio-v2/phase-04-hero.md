---
phase: 04
name: hero
effort_hours: 0.7
---

# Phase 04 — Hero, cursor-spot, marquee

## Goal
Replace the old centered-hero with an asymmetric editorial hero. Oversized Fraunces "TOAN HO" bleeds off the right edge, mono kicker + body tagline on the left, a marquee strip anchors the bottom, and a soft cursor-following spot sits behind everything on desktop.

## Files to touch
- `components/sections/hero.tsx` (full rewrite)
- `components/cursor-spot.tsx` (NEW, client component)
- `components/marquee-band.tsx` (NEW, used here + reusable)

## Hero layout
- Section height `min-h-[100svh]`, 12-col grid, grid-template-rows `auto 1fr auto`
- Row 1 (top, left 6 cols): mono kicker `PRODUCT DESIGNER · HCMC · 2025` in `.label-mono`
- Row 2 (centerpiece): H1 `TOAN HO` in Fraunces weight 800, `font-size: clamp(5rem, 16vw, 14rem)`, `line-height: 0.88`, `letter-spacing: -0.04em`, positioned so the `O` of `HO` sits at `right: -6vw` (bleeds off viewport) — use `transform: translateX(6vw)` or negative margin
- Row 2 (below H1, left 5 cols): tagline paragraph in Geist Sans, ~19px, max 38ch: `"Thiết kế sản phẩm có ý tưởng, có hậu quả — từ brand system tới editorial web."`
- Row 3 (bottom, full-bleed): `<MarqueeBand>` — 1px neon hairline top & bottom, content: `PRODUCT DESIGN · BRAND SYSTEMS · EDITORIAL · DESIGN SYSTEMS ·` repeated, mono, uppercase, tracking `.18em`, scrolls left at 40s linear infinite, pauses on hover

## Cursor spot
- Client component, `fixed inset-0 pointer-events-none z-0`
- 480px radial gradient, center color `rgba(198,244,50,0.06)` → transparent
- Tracks `mousemove` with lerp (0.12); disabled on `(hover: none)` / `(pointer: coarse)` via media query
- `mix-blend-mode: screen` so it lifts noir without drowning ink text

## Acceptance criteria
- H1 visibly clips off the right viewport edge at ≥1280px (last glyph partially outside).
- Hero is NOT horizontally centered — kicker, H1 start, and tagline all left-align to the grid's left edge.
- Marquee scrolls smoothly, pauses on hover, both hairlines are neon (the only neon in the hero).
- Cursor spot is visible on desktop, absent on touch devices, and never captures pointer events.
- Tagline is Geist Sans (body), not serif.
