import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import { getAllProjects } from "@/lib/content";

export function Projects() {
  const projects = getAllProjects();
  const { title, subtitle } = homeContent.projects;

  return (
    <Section id="projects">
      <SectionHeading index="03">{title}</SectionHeading>
      {subtitle ? (
        <p className="-mt-4 mb-10 max-w-2xl text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
