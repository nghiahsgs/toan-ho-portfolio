---
phase: 03
name: hero
priority: P0
effort_hours: 0.75
depends_on: [02]
---

# Phase 03 — Hero section

## Context links
- Intent → `clarifications.name`, `title`, `reference_design.cta_primary`, `cta_secondary`
- Design → `layout.hero`, `typography.scale.h1`

## Overview
Hero is the first impression. Oversized name (Exaggerated Minimalism touch), role below, tagline, two CTAs: primary blue `Xem dự án` scrolls to `#du-an`, ghost `Liên hệ` scrolls to `#lien-he`.

## Key insights
- Name uses `clamp(2.75rem, 6vw, 4.5rem)` font size, `font-heading font-bold tracking-tight`
- Subtle gradient accent: name gets `bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent`
- Primary CTA uses shadcn `Button` with `bg-[#2563EB] hover:bg-[#1D4ED8]`
- Ghost CTA: `variant="outline"` with `border-white/20 hover:border-white/40`

## Requirements
- CTAs are native `<a href="#...">` wrapped with shadcn Button `asChild` — not JS scroll
- Hero takes ≥ 80vh on desktop, centered content
- No decorative images (user said no avatar)
- Motion: fade-up on mount, 400ms, `@media (prefers-reduced-motion: no-preference)` only

## Related code files
**create**
- `components/sections/hero.tsx`

**modify**
- `app/page.tsx` — import and render `<Hero />` inside `section#hero`

## Implementation steps
1. Create `components/sections/hero.tsx` (Server Component).
2. Layout: centered flex column, `min-h-[80vh]`, gap-6.
3. Eyebrow small label (uppercase, muted): `Xin chào, tôi là`.
4. H1: `Toan Ho` with gradient clip.
5. Subtitle h2: `Full-Stack Developer` (muted zinc-400).
6. Tagline paragraph: short VN sentence — reuse `bio`'s first clause or write: `Xây dựng ứng dụng web hiện đại với React, Next.js & Node.js.`
7. Two buttons in flex row, gap-3, wrap on mobile. Primary asChild `<a href="#du-an">Xem dự án</a>`, secondary asChild `<a href="#lien-he">Liên hệ</a>`.
8. Add CSS-only fade-up via Tailwind `animate-in fade-in slide-in-from-bottom-4 duration-700` (tailwindcss-animate ships with shadcn).
9. Mount in `app/page.tsx` inside `#hero` section.
10. `npm run build`.

## Todo
- [ ] Hero component created, Server Component
- [ ] Vietnamese eyebrow, name, title, tagline rendered
- [ ] Gradient clip on name renders correctly on dark bg
- [ ] Primary CTA is blue, ghost CTA has border
- [ ] CTAs are anchor links (work with JS disabled)
- [ ] Fade-up animation present and reduced-motion-safe
- [ ] `npm run build` passes

## Success criteria
- Hero fills ~80vh on 1440px display
- Name is readable at 320px width (wraps if needed, no overflow)
- Clicking `Xem dự án` jumps to projects section
- Lighthouse CLS for hero area = 0
