# Plan — Portfolio Toan Ho (iter 2: Designer redesign)

1. **Pivot nội dung:** Toan Ho → **Product Designer**. Tagline mới + 4 project case study (Nova Banking, Kafe Identity, Lumen Editorial, Orbit Design System).
2. **Aesthetic mới:** Noir editorial × brutalist grid × **lime neon #C6F432** — oversized serif display bleed off-grid, mono label, marquee tag band, asymmetric magazine layout (bỏ centered hero).
3. **Tech:** Giữ Next.js 16 + Tailwind v4 + shadcn đã có. Thêm `framer-motion` cho scroll reveal + cursor-follow. Font: **Fraunces** (display serif) + **JetBrains Mono** (meta) + **Geist Sans** (body).
4. **Reuse:** Không scaffold lại — chỉ rewrite `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, các section + thêm components mới (marquee, editorial-tile, cursor-spot, number-index).
5. **Est. time:** 8–12 phút.
