---
phase: 06
name: polish-seo
priority: P1
effort_hours: 1.0
depends_on: [03, 04, 05]
---

# Phase 06 — Polish + SEO

## Context links
- seo-basic skill
- Design → `motion`, `accessibility`
- All previous phases

## Overview
Final pass: metadata, Open Graph, sitemap, robots, favicon, active-section nav highlight, scroll-reveal animations, Lighthouse tune. Ship-ready.

## Key insights
- Next 14 App Router uses `export const metadata: Metadata` in `app/layout.tsx`
- Active-section highlighting needs a tiny Client Component using `IntersectionObserver` — keep it isolated so the rest stays Server
- Favicon: generate a simple `TH` monogram SVG, place at `app/icon.svg`
- OG image can be generated at build time via `app/opengraph-image.tsx` (Next built-in `ImageResponse`) — black bg, white `Toan Ho` text, blue accent bar

## Requirements
- Lighthouse (mobile) ≥ 95 performance, 100 a11y, 100 best-practices, 100 SEO
- `<title>`: `Toan Ho — Full-Stack Developer`
- `<meta name="description">`: uses bio's first sentence
- `robots.txt` allows all, references sitemap
- `sitemap.xml` lists `/` only
- All images (if any) have alt; our page has none → pass by default

## Related code files
**create**
- `app/icon.svg`
- `app/opengraph-image.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/active-section.tsx` (Client, IntersectionObserver)

**modify**
- `app/layout.tsx` — add `metadata` export (title, description, OG, Twitter, canonical)
- `components/site-nav.tsx` — consume active-section context to add `aria-current="page"` + accent underline
- `app/globals.css` — add keyframe `@keyframes fade-up` + `.reveal` utility guarded by reduced-motion media query
- `components/sections/*` — add `className="reveal"` to each section root for scroll-triggered entrance (falls back to static if no-motion)

## Implementation steps
1. Export `metadata` in `app/layout.tsx` with title, description, openGraph object, twitter card, `metadataBase: new URL('https://<deploy-domain>')` (placeholder OK, user will swap on Vercel).
2. Create `app/opengraph-image.tsx` using Next `ImageResponse` — 1200x630, black bg, `Toan Ho` in Geist, blue underline.
3. Create `app/icon.svg` — 32x32 monogram.
4. Create `app/sitemap.ts` returning `[{ url: '/', lastModified: new Date() }]`.
5. Create `app/robots.ts` returning `{ rules: { userAgent: '*', allow: '/' }, sitemap: '<base>/sitemap.xml' }`.
6. Build `components/active-section.tsx` (Client) — observes the 4 sections, emits active id via a small React context; nav links compare and apply `data-active` styling.
7. Add `.reveal` CSS class: `opacity-0 translate-y-3`, then `animate-fade-up` when `.is-visible` is added by IntersectionObserver (second observer, or reuse same). Wrap in `@media (prefers-reduced-motion: no-preference)` else element is simply visible.
8. Run `npm run build` + `npx @lhci/cli autorun` (optional) locally to confirm.

## Todo
- [ ] `metadata` export populated (title, description, OG, Twitter)
- [ ] `app/icon.svg` present and ≤1 KB
- [ ] Dynamic OG image renders at `/opengraph-image`
- [ ] `sitemap.xml` + `robots.txt` accessible via route handlers
- [ ] Active section highlight works while scrolling
- [ ] Scroll reveal animates in, respects `prefers-reduced-motion`
- [ ] Lighthouse mobile ≥95 / 100 / 100 / 100
- [ ] `npm run build` passes, no warnings

## Success criteria
- `curl http://localhost:3000/robots.txt` returns content
- `curl http://localhost:3000/sitemap.xml` returns valid XML with `/`
- View source shows populated `<title>` + `<meta og:image>` pointing to `/opengraph-image`
- Reload page with reduced motion on — sections appear instantly, no FOUC
- Tab through nav after scrolling mid-page — current link has visible accent state
