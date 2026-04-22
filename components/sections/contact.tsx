import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import { PROFILE } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconLinkClass = cn(
  buttonVariants({ variant: "outline", size: "icon" }),
  "h-11 w-11 border-white/20 bg-transparent hover:border-white/40 hover:bg-white/5"
);

export function Contact() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
      <h2
        id="lien-he-title"
        className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight"
      >
        Liên hệ
      </h2>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Bạn có dự án thú vị? Hãy liên hệ với tôi qua email hoặc các mạng xã hội
        bên dưới.
      </p>

      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-[#3B82F6] underline decoration-[#3B82F6]/40 underline-offset-4 transition-colors hover:text-[#60A5FA] hover:decoration-[#60A5FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm sm:text-xl"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
        {PROFILE.email}
      </a>

      <ul className="mt-8 flex items-center gap-3">
        <li>
          <a
            href={PROFILE.github}
            aria-label="GitHub của Toan Ho"
            className={iconLinkClass}
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href={PROFILE.linkedin}
            aria-label="LinkedIn của Toan Ho"
            className={iconLinkClass}
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Gửi email cho Toan Ho"
            className={iconLinkClass}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
}
