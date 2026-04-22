import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { PROFILE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Xin chào, tôi là
      </p>
      <h1 className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-tight tracking-tight text-transparent">
        {PROFILE.name}
      </h1>
      <h2 className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
        {PROFILE.title}
      </h2>
      <p className="mt-6 max-w-xl text-base text-zinc-300 sm:text-lg">
        Xây dựng ứng dụng web hiện đại với React, Next.js và Node.js.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#du-an"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 px-6 bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          )}
        >
          Xem dự án
        </a>
        <a
          href="#lien-he"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 px-6 border-white/20 bg-transparent text-foreground hover:border-white/40 hover:bg-white/5"
          )}
        >
          Liên hệ
        </a>
      </div>

      <ul className="mt-10 flex items-center gap-6">
        <li>
          <a
            href={PROFILE.github}
            aria-label="GitHub của Toan Ho"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <GithubIcon className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={PROFILE.linkedin}
            aria-label="LinkedIn của Toan Ho"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Gửi email cho Toan Ho"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
