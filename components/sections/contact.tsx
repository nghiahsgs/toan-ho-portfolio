const SOCIAL_LINKS = [
  { label: "GITHUB", href: "https://github.com/" },
  { label: "DRIBBBLE", href: "https://dribbble.com/" },
  { label: "LINKEDIN", href: "https://linkedin.com/" },
];

export function Contact() {
  return (
    <div className="px-6 md:px-10 lg:px-16">
      <p
        id="lien-he-title"
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted"
      >
        GET IN TOUCH / 03
      </p>

      <h2
        className="mt-10 font-display italic text-ink"
        style={{
          fontSize: "clamp(3rem, 10vw, 9rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
        }}
      >
        Hãy cộng tác.
      </h2>

      <a
        href="mailto:hello@toanho.com"
        className="group mt-14 inline-block font-display text-ink"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 6rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          fontVariationSettings: '"opsz" 96, "SOFT" 40, "WONK" 0',
        }}
      >
        <span className="relative">
          hello@toanho.com
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 block h-[2px] w-full origin-left scale-x-0 bg-neon transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
          />
        </span>
      </a>

      <ul className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4">
        {SOCIAL_LINKS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted hover:text-neon transition-colors"
            >
              <span>{s.label}</span>
              <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-lg font-sans text-[15px] leading-[1.65] text-muted">
        Sài Gòn, Việt Nam · Đang nhận dự án quý 2/2025
      </p>
    </div>
  );
}
