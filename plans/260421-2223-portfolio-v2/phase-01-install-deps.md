---
phase: 01
name: install-deps
effort_hours: 0.3
---

# Phase 01 — Install dependencies & wire fonts

## Goal
Add framer-motion and register Fraunces + JetBrains Mono via `next/font/google`; preserve Geist Sans and Tailwind v4 `@theme` block.

## Files to touch
- `package.json` — add `framer-motion`
- `app/layout.tsx` — import `Fraunces` and `JetBrains_Mono` from `next/font/google`, expose as CSS vars `--font-display`, `--font-mono`; keep existing Geist wiring as `--font-sans`
- No style changes yet (phase 02 consumes the vars)

## Notes
- Fraunces: `variable: '--font-display'`, `subsets: ['latin']`, `axes: ['opsz', 'SOFT']`, `weight: ['400','500','600','700','800','900']`, `display: 'swap'`
- JetBrains Mono: `variable: '--font-mono'`, `weight: ['400','500','700']`, `display: 'swap'`
- Apply all three font `className`s to `<html>` so the CSS vars are global

## Acceptance criteria
- `npm install` completes; `framer-motion` appears in `dependencies`.
- `npm run build` passes unchanged.
- DevTools shows `--font-display`, `--font-mono`, `--font-sans` on `<html>` with the correct font-families.
- No visual change yet (phase 02 will flip styles).
- No residual font loads for Inter or system-ui.
