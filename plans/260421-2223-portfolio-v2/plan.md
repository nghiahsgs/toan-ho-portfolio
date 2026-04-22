---
slug: portfolio-v2
iteration: 2
created: 2026-04-21 22:23
category: landing-page
subtype: personal-portfolio-designer
status: approved
phases: 6
critical_path_hours: 3.5
---

# Portfolio Toan Ho — v2 (Product Designer redesign)

## Intent

Pivot the existing Next.js 16 portfolio from "Full-Stack Developer — minimalist dark" to "Product Designer — noir editorial × brutalist grid × lime-neon accent". Rewrite in place; do **not** re-scaffold.

## Visual point-of-view

Dark magazine spread. Warm off-white ink (`#F5F2EA`) on true noir (`#0A0A0A`). Oversized Fraunces display serif that intentionally clips the right viewport edge. JetBrains Mono labels and 01/02/03/04 folios like a print magazine. One electric lime accent (`#C6F432`) used on <5% of any frame — CTA, active nav underline, index numeral on hover. Asymmetric twelve-column grid, never a centered column. Subtle SVG-noise grain overlay fixed to the viewport for atmospheric texture.

## Phases

| # | Name | Scope | Effort (h) | Depends on |
|---|---|---|---|---|
| 01 | install-deps | Add framer-motion + next/font Fraunces + JetBrains Mono | 0.3 | — |
| 02 | global-styles | Rewrite `app/globals.css` with @theme tokens + grain + font faces | 0.7 | 01 |
| 03 | layout-nav | Rewrite `app/layout.tsx` metadata + `components/site-nav.tsx` slim numbered nav with scroll-blur | 0.5 | 02 |
| 04 | hero | Rewrite `components/sections/hero.tsx`, add `components/cursor-spot.tsx`, marquee band | 0.7 | 03 |
| 05 | about-projects | Rewrite about as two-column; replace project cards with `components/editorial-tile.tsx` rows | 0.8 | 04 |
| 06 | contact-footer | Rewrite contact (oversized serif + huge email link) + footer (thin rule, mono copyright) | 0.5 | 05 |

Total critical path: **~3.5h** single-threaded.

## Dependencies

```
01 → 02 → 03 → 04 → 05 → 06
```

Strictly linear. Each phase must keep `npm run build` green and the site visually consistent with the established aesthetic before the next phase starts.

## Files touched (summary)

- **Add**: `components/cursor-spot.tsx`, `components/editorial-tile.tsx`, `components/marquee-band.tsx`
- **Rewrite**: `app/globals.css`, `app/layout.tsx`, `app/page.tsx` (minimal — just section composition), `components/site-nav.tsx`, `components/site-footer.tsx`, `components/sections/hero.tsx`, `components/sections/about.tsx`, `components/sections/projects.tsx`, `components/sections/contact.tsx`
- **Delete**: `components/project-card.tsx` (superseded by editorial-tile)
- **Keep as-is**: `app/robots.ts`, `app/sitemap.ts`, `app/icon.svg`, `components/brand-icons.tsx`, `components/skip-link.tsx`, `components/ui/*`

## Blocking assumption

Geist Sans is already wired through `app/layout.tsx` via the `geist` package. Phase 02 assumes it stays; if not, fullstack-dev must swap to `next/font/google` Geist in phase 01 at no extra cost.

## Success criteria (site-wide)

- No section is horizontally centered as a single column.
- H1 "TOAN HO" visibly clips off the right viewport edge at ≥1280px.
- Neon `#C6F432` occupies <5% of any captured viewport.
- No use of Inter, Roboto, or system-ui as primary families anywhere.
- `npm run build` passes at the end of every phase.
