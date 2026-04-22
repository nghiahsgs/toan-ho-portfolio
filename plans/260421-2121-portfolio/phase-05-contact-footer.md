---
phase: 05
name: contact-footer
priority: P0
effort_hours: 0.5
depends_on: [02]
---

# Phase 05 — Contact + Footer

## Context links
- Intent → `clarifications.email`, `github`, `linkedin`
- Design → `layout.contact`, `layout.footer`

## Overview
Simple centered contact block with email CTA and 3 icon buttons (GitHub, LinkedIn, Mail). Minimal footer with copyright line. No form — user said no DB, no auth, no backend.

## Key insights
- Email button uses `mailto:toanho@example.com` — works offline, no JS
- Social URLs are `#` placeholders per intent; still render as real `<a>` with `aria-label` so users can inspect / swap later
- Icons from lucide-react: `Mail`, `Github`, `Linkedin`
- Footer is static, single line, muted

## Requirements
- Every icon button has accessible `aria-label` in Vietnamese (`Gửi email`, `GitHub của Toan Ho`, `LinkedIn của Toan Ho`)
- Icon buttons use `variant="outline" size="icon"`, 44x44 minimum (a11y tap target)
- Footer copyright uses current year via `new Date().getFullYear()` (Server Component — static at build)
- No emoji; icons only

## Related code files
**create**
- `components/sections/contact.tsx`
- `components/site-footer.tsx`

**modify**
- `app/page.tsx` — mount `<Contact />` inside `#lien-he`
- `app/layout.tsx` — mount `<SiteFooter />` after `{children}`

## Implementation steps
1. Build `components/sections/contact.tsx`:
   - Heading `Liên hệ`
   - Muted lead text: `Luôn sẵn sàng trao đổi về cơ hội hợp tác hoặc dự án thú vị.`
   - Large primary Button `asChild` with `<a href="mailto:toanho@example.com">toanho@example.com</a>`, Mail icon on left
   - Row of 3 outline icon Buttons: GitHub, LinkedIn, Mail — each `asChild <a href="#" aria-label="...">`
   - Center everything with `flex flex-col items-center gap-6`
2. Build `components/site-footer.tsx` (Server):
   - `<footer className="border-t border-zinc-800 mt-12 py-6 text-center text-sm text-zinc-500">`
   - Content: `© {year} Toan Ho · Được xây dựng với Next.js`
3. Mount contact in page.tsx, footer in layout.tsx.
4. `npm run build`.

## Todo
- [ ] Contact section renders heading, lead, email button, social row
- [ ] Email button opens mailto link on click
- [ ] All 3 social buttons have Vietnamese aria-label
- [ ] Icon buttons are ≥44px tap targets
- [ ] Footer shows current year and Vietnamese credit line
- [ ] Footer has top border separating it from content
- [ ] `npm run build` passes

## Success criteria
- Mailto opens user's email client on desktop + mobile
- Screen reader announces each social button correctly in Vietnamese
- Footer is the last thing on the page, not hidden behind nav
