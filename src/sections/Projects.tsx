import { ArchiveProjectsExpand } from "@/components/projects/ArchiveProjectsExpand";
import { ProjectIndexRow } from "@/components/projects/ProjectIndexRow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import { getArchiveProjects, getFeaturedProjects } from "@/lib/content";

export function Projects() {
  const featuredProjects = getFeaturedProjects();
  const archiveProjects = getArchiveProjects();
  const { title, subtitle } = homeContent.projects;

  return (
    <Section id="projects">
      <SectionHeading index="03">{title}</SectionHeading>
      {subtitle ? (
        <p className="-mt-4 mb-6 max-w-2xl text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}

      <div className="flex flex-col">
        {featuredProjects.map((project, index) => (
          <ProjectIndexRow key={project.slug} project={project} index={index} />
        ))}
      </div>

      <ArchiveProjectsExpand projects={archiveProjects} />
    </Section>
  );
}
