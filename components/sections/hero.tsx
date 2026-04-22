import { Marquee } from "@/components/marquee";

const MARQUEE_TAGS = [
  "PRODUCT DESIGN",
  "BRAND SYSTEMS",
  "EDITORIAL",
  "DESIGN SYSTEMS",
  "MOBILE",
  "ART DIRECTION",
];

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between">
      {/* 12-col grid: content left 7, meta strip right 5 */}
      <div className="grid flex-1 grid-cols-12 gap-6 px-6 pt-28 md:px-10 md:pt-36 lg:px-16 lg:pt-40">
        {/* LEFT — content column */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            PRODUCT DESIGNER · HCMC · AVAILABLE
          </p>

          {/* Oversized serif H1 that clips the right edge */}
          <h1
            className="font-display font-extrabold text-ink select-none mt-8 w-max -mr-[10vw]"
            style={{
              fontSize: "clamp(5rem, 16vw, 14rem)",
              lineHeight: 0.82,
              letterSpacing: "-0.04em",
              fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0',
            }}
          >
            Toan Ho
          </h1>

          <p
            className="mt-10 max-w-3xl font-display italic text-ink-muted"
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
              lineHeight: 1.12,
              fontVariationSettings: '"opsz" 60, "SOFT" 80, "WONK" 0',
            }}
          >
            Designer dựng trải nghiệm số ở Sài Gòn.
          </p>

          <p className="mt-10 max-w-xl font-sans text-[17px] leading-[1.65] text-ink-muted">
            Tôi thiết kế sản phẩm có chiều sâu — từ brand identity, mobile app, đến design
            system cho đội ngũ lớn. Bảy năm làm việc giữa typography editorial và product
            interface. Gần đây tập trung vào trải nghiệm fintech và nền tảng SaaS.
          </p>

          <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <a
              href="#du-an"
              className="group inline-flex items-baseline gap-3 font-display text-3xl md:text-4xl text-ink"
            >
              <span className="relative">
                Xem dự án
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-neon transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] scale-x-100 group-hover:scale-x-[1.08]"
                />
              </span>
              <span
                aria-hidden
                className="text-neon transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="mailto:hello@toanho.com"
              className="font-mono text-xs uppercase tracking-[0.25em] text-muted hover:text-ink transition-colors"
            >
              liên hệ / hello@toanho.com
            </a>
          </div>
        </div>

        {/* RIGHT — vertical mono meta strip */}
        <div className="hidden md:col-span-5 md:flex items-end justify-end">
          <div
            aria-hidden
            className="flex flex-col items-end gap-2 pr-2 pb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-muted"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span>ROLE — PRODUCT DESIGNER</span>
            <span>LOC — HCMC</span>
            <span>YR — 2025</span>
          </div>
        </div>
      </div>

      {/* Bottom marquee band, full-bleed */}
      <div className="mt-16">
        <Marquee items={MARQUEE_TAGS} />
      </div>
    </div>
  );
}
