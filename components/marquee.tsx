type MarqueeProps = {
  items: string[];
  /** Glyph between items. Default diamond. */
  separator?: string;
};

export function Marquee({ items, separator = "◆" }: MarqueeProps) {
  const track = [...items, ...items];
  return (
    <div
      className="marquee relative w-full overflow-hidden border-y border-hairline py-5"
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {track.map((label, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.28em] text-ink-muted whitespace-nowrap"
          >
            <span>{label}</span>
            <span aria-hidden className="text-neon text-[0.55rem]">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
