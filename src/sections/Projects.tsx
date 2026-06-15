import { homeContent } from "@/content/home";
import type { ProjectCard } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/lib/content";

function ProjectCardItem({ project }: { project: ProjectCard }) {
  const { viewCaseStudy } = homeContent.projects;

  return (
    <article className="group flex flex-col gap-4">
      <div
        className="flex aspect-video items-center justify-center rounded border border-border bg-surface-elevated"
        aria-hidden
      >
        <span className="font-mono text-xs text-muted">Screenshot</span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        <div>
          <Button href={`/projects/${project.slug}`} variant="ghost">
            {viewCaseStudy} →
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const projects = getFeaturedProjects();
  const { title } = homeContent.projects;

  return (
    <Section id="projects">
      <SectionHeading className="mb-12">{title}</SectionHeading>
      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCardItem key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
