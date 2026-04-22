import Link from "next/link";

type Props = {
  index: string;
  name: string;
  kind: string;
  desc: string;
  year: string;
  href?: string;
};

export function EditorialTile({
  index,
  name,
  kind,
  desc,
  year,
  href = "#",
}: Props) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-12 items-center gap-6 border-t border-hairline py-10 transition-[transform,border-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:border-ink-muted hover:translate-x-1"
    >
      {/* col-span-1 — oversized index */}
      <div className="col-span-2 md:col-span-1">
        <span
          className="font-display text-muted transition-colors duration-300 group-hover:text-neon group-hover:[animation:flicker_420ms_steps(6,end)_1] block"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            lineHeight: 0.9,
            fontWeight: 400,
            fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          }}
        >
          {index}
        </span>
      </div>

      {/* col-span-5 — project name + kicker */}
      <div className="col-span-10 md:col-span-5">
        <h3
          className="font-display text-ink relative inline-block"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3.75rem)",
            lineHeight: 1,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 96, "SOFT" 50, "WONK" 0',
          }}
        >
          {name}
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 block h-[2px] w-full origin-left scale-x-0 bg-neon transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
          />
        </h3>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          {kind}
        </p>
      </div>

      {/* col-span-4 — description */}
      <div className="col-span-8 md:col-span-4">
        <p className="font-sans text-[15px] md:text-base leading-[1.55] text-ink-muted max-w-sm">
          {desc}
        </p>
      </div>

      {/* col-span-2 — year */}
      <div className="col-span-4 md:col-span-2 text-right">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {year}
        </span>
      </div>
    </Link>
  );
}
