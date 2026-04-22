import { Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isDemo = project.linkType === "demo";
  const label = isDemo ? "Xem thử" : "Mã nguồn";
  const Icon = isDemo ? ExternalLink : Code2;
  // TODO: replace `#` with the real demo/source URL when available.
  const href = "#";

  return (
    <Card className="group h-full border-border bg-[#111113] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-600">
      <CardHeader>
        <CardTitle className="font-heading text-xl text-foreground">
          {project.name}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
          {project.desc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge
                variant="secondary"
                className="bg-[#18181B] text-zinc-200 hover:bg-[#27272A]"
              >
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a
          href={href}
          aria-label={`${label} — ${project.name}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span>{label}</span>
        </a>
      </CardFooter>
    </Card>
  );
}
