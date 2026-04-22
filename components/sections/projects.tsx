import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/content";

export function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <h2
        id="du-an-title"
        className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight"
      >
        Dự án
      </h2>
      <p className="mt-3 text-base text-muted-foreground">
        Một vài sản phẩm gần đây tôi đã làm.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
