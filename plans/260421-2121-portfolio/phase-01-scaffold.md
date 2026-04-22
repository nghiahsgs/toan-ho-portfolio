---
phase: 01
name: scaffold
priority: P0
effort_hours: 0.5
depends_on: []
---

# Phase 01 — Scaffold

## Context links
- Intent: `/Users/nguyennghia/test-portpolio/.taw/intent.json`
- Design tokens: `/Users/nguyennghia/test-portpolio/.taw/design.json`
- Plan: `../plan.md`

## Overview
Create Next.js 14 App Router project with TypeScript + Tailwind + shadcn/ui. Wire fonts (Inter + Geist Sans) via `next/font/google`. Install lucide-react. Seed design tokens into `globals.css` + `tailwind.config.ts`.

## Key insights
- Use `create-next-app@14` with `--ts --tailwind --app --src-dir=false --import-alias "@/*"`
- shadcn/ui init with `--style=new-york --base-color=zinc`
- Fonts exposed as CSS vars (`--font-inter`, `--font-geist-sans`) from `app/layout.tsx`

## Requirements
- Node ≥ 18.17
- `npm run build` green on empty page
- Tailwind `darkMode: 'class'` with `html` carrying `class="dark"` permanently (single-theme)

## Related code files
**create**
- `package.json`
- `tsconfig.json`
- `next.config.mjs`
- `tailwind.config.ts`
- `postcss.config.js`
- `app/layout.tsx`
- `app/page.tsx` (placeholder)
- `app/globals.css` (Tailwind layers + CSS vars from design.json)
- `components.json` (shadcn config)
- `lib/utils.ts` (cn helper)
- `.gitignore`

**delete** none

## Implementation steps
1. `npx create-next-app@14 . --ts --tailwind --app --eslint --import-alias "@/*"` (answer No to src-dir).
2. `npx shadcn@latest init` → style: new-york, base color: zinc, CSS vars yes.
3. `npx shadcn@latest add button card badge separator`.
4. `npm i lucide-react`.
5. Edit `app/layout.tsx` — load `Inter` and `Geist_Sans` from `next/font/google`, attach as CSS vars, set `<html lang="vi" className="dark ${inter.variable} ${geist.variable}">`.
6. Edit `app/globals.css` — overwrite `:root` CSS vars with design.json palette (`--background: 10 10 10`, `--foreground: 250 250 250`, `--primary: 37 99 235`, etc, in HSL or space-separated RGB per shadcn convention).
7. Edit `tailwind.config.ts` — add `fontFamily.heading` + `fontFamily.body` referencing CSS font vars. Keep shadcn theme extension.
8. Replace `app/page.tsx` body with `<main className="min-h-screen" />` placeholder.
9. `npm run build` → must pass.

## Todo
- [ ] create-next-app bootstrapped
- [ ] shadcn initialised, 4 components added
- [ ] lucide-react installed
- [ ] Fonts wired as CSS vars in layout.tsx
- [ ] globals.css matches design.json palette
- [ ] tailwind.config.ts exposes heading/body font families
- [ ] `html lang="vi" class="dark"` set
- [ ] `npm run build` passes

## Success criteria
- `npm run dev` shows blank black page at localhost:3000
- `npm run build` exits 0
- No console warnings about missing fonts
