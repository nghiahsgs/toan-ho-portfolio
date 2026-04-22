---
phase: 05
name: about-projects
effort_hours: 0.8
---

# Phase 05 — About (two-column) & Projects (editorial tiles)

## Goal
Turn "About" into a print-style two-column spread and replace the shadcn Card grid with four full-width editorial tile rows keyed 01–04. Content comes from `.taw/intent.json › design_brief.content_swap.projects`.

## Files to touch
- `components/sections/about.tsx` (full rewrite)
- `components/sections/projects.tsx` (full rewrite)
- `components/editorial-tile.tsx` (NEW)
- `components/project-card.tsx` (DELETE)

## About layout
- 12-col grid, gap 40px
- Left (cols 1–4): mono eyebrow stack
  - `.label-mono` `ABOUT / 02`
  - `.label-mono` `SELECTED · 2024/25`
  - `.label-mono` `HCMC — REMOTE`
- Right (cols 5–12): one Fraunces H2 statement (weight 600, ~48–64px) + one Geist body paragraph below (~19px, max 56ch)
- No images, no avatar, no icon list

## Project tile spec (`editorial-tile.tsx`)
- Props: `index` ('01'…), `name`, `kind`, `desc`, `year`, `tags: string[]`
- Full-width row, `py-10 md:py-14`, `border-top: 1px solid var(--color-rule)` (last child also border-bottom)
- 12-col grid inside:
  - cols 1–1: oversized index numeral in Fraunces weight 500, clamp(3.5rem, 7vw, 6rem), color ink-muted
  - cols 2–7: project `name` in Fraunces weight 600, clamp(1.75rem, 3.5vw, 3rem); below it `kind` in `.label-mono` color muted
  - cols 8–10: `desc` in Geist body, 17px, ink-muted
  - cols 11–12: `year` in `.label-mono`, right-aligned; tags below as mono chips separated by ` · `
- Hover: whole row translates `-2px` Y (300ms ease); index numeral flips from ink-muted → neon; a 1px neon underline slides L→R under `name` (keyframe width 0→100%, 400ms)
- Click target: full row is a link (even if `href="#"` placeholder)
- Use framer-motion `whileInView` to fade + slide each row in (y:24→0, stagger 80ms)

## Projects section
- `.label-mono` `SELECTED WORK / 03` top-left
- H2 Fraunces "Bốn dự án gần đây" (weight 600, 64–80px, left-aligned)
- Render 4 `<EditorialTile>` rows in order from intent.json

## Acceptance criteria
- Projects are rendered as four full-bleed horizontal rows separated by hairline rules — NO 3-up card grid.
- Each row's index numeral is visible and unmistakable (01, 02, 03, 04) in Fraunces, not mono.
- On hover, exactly one row shows a neon underline and neon index; no others change.
- About section has NO avatar or icon; just mono labels left, serif statement + body right.
- `components/project-card.tsx` no longer exists; no import path points to it.
