---
project: portfolio-toan-ho
created: 2026-04-21
category: landing-page / personal-portfolio
stack: Next.js 14 App Router + TypeScript + Tailwind CSS + shadcn/ui
deploy: Vercel
phases: 6
critical_path_hours: 4.5
---

# Plan — Portfolio Toan Ho

Single-page personal portfolio, dark minimalism, blue accent, 4 sections. No DB, no auth. Static export ready. Vietnamese copy.

## Phase table

| #  | Phase               | File                          | Effort | Depends |
|----|---------------------|-------------------------------|--------|---------|
| 01 | Scaffold            | phase-01-scaffold.md          | 0.5h   | —       |
| 02 | Layout + nav        | phase-02-layout-nav.md        | 0.75h  | 01      |
| 03 | Hero section        | phase-03-hero.md              | 0.75h  | 02      |
| 04 | About + projects    | phase-04-about-projects.md    | 1.0h   | 02      |
| 05 | Contact + footer    | phase-05-contact-footer.md    | 0.5h   | 02      |
| 06 | Polish + SEO        | phase-06-polish-seo.md        | 1.0h   | 03,04,05|

**Critical path:** 01 → 02 → 04 → 06  ≈ 4.5 h wall-clock.

## Design tokens

See `/Users/nguyennghia/test-portpolio/.taw/design.json`.

- Style: Dark Minimalism (WCAG AAA)
- Palette: bg `#0A0A0A`, text `#FAFAFA`, accent `#2563EB`, border `#27272A`
- Fonts: Geist Sans (heading) + Inter (body), loaded via `next/font/google`
- Icons: lucide-react only
- Layout: `max-w-5xl` container, floating glass nav, 2x2 project grid

## Copy source of truth

`/Users/nguyennghia/test-portpolio/.taw/intent.json` → `reference_design` + `clarifications`. All user-visible strings in Vietnamese.

## Non-goals

- No dark/light toggle (dark only per user)
- No CMS, no DB, no API routes
- No avatar image (user said false)
- No blog
- No i18n infrastructure (VN only)

## Invariants

- After every phase `npm run build` passes
- Lighthouse ≥95 after phase 06
- All headings use `font-heading`, body uses `font-body`
- Tailwind tokens reference CSS vars from `:root` (derived from design.json)

## Handoff

Phases are independently shippable. Phases 03/04/05 can run in parallel after 02 if multiple devs — but fullstack-dev is single-threaded so runs 03 → 04 → 05 sequentially.
