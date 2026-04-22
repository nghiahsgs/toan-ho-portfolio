import { Badge } from "@/components/ui/badge";
import { BIO, SKILLS } from "@/lib/content";

export function About() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <h2
        id="gioi-thieu-title"
        className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight"
      >
        Về tôi
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
        <article className="max-w-prose text-base leading-relaxed text-zinc-300">
          <p>{BIO}</p>
        </article>
        <div>
          <h3 className="font-heading mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Kỹ năng
          </h3>
          <ul className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li key={skill}>
                <Badge
                  variant="secondary"
                  className="bg-[#18181B] text-zinc-200 hover:bg-[#27272A]"
                >
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
