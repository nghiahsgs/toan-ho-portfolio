---
phase: 02
name: global-styles
effort_hours: 0.7
---

# Phase 02 — Global styles & theme tokens

## Goal
Rewrite `app/globals.css` so the whole site inherits the noir + warm-ink + lime-neon system, grain texture, and editorial typography. Kill any residual "minimalist dark developer" styling.

## Files to touch
- `app/globals.css` (full rewrite)

## Tokens (Tailwind v4 `@theme`)
- `--color-noir: #0A0A0A`, `--color-noir-raised: #131312`
- `--color-ink: #F5F2EA`, `--color-ink-muted: #C8C4B7`
- `--color-muted: #8A867E`, `--color-rule: #26241F`
- `--color-neon: #C6F432`, `--color-neon-dim: #8BB022`
- `--font-display: var(--font-display), 'Fraunces', Georgia, serif`
- `--font-mono: var(--font-mono), 'JetBrains Mono', ui-monospace, monospace`
- `--font-sans: var(--font-sans), ui-sans-serif, system-ui` (body only)

## Must include
- `body { background: var(--color-noir); color: var(--color-ink); font-family: var(--font-sans); }`
- Grain overlay: fixed `::before` on `body`, `background-image` = SVG-noise data URL from `.taw/design.json`, `opacity: .35`, `mix-blend-mode: overlay`, `pointer-events: none`, `z-index: 1`
- Utility `.font-display`, `.font-mono`, `.label-mono` (uppercase, `letter-spacing: .18em`, size .75rem)
- Remove any old `.hero-centered`, `.dev-stack` or centered-column utilities

## Acceptance criteria
- Background is `#0A0A0A`, NOT pure black; text reads as warm off-white, NOT pure white.
- Grain texture is visible on a blank viewport but never obscures body text.
- Default body font is Geist Sans; `h1, h2` default to Fraunces; `.label-mono` renders in JetBrains Mono uppercase.
- No Inter, Roboto, or Arial appears in the computed font stack for any element.
- `npm run build` passes.
