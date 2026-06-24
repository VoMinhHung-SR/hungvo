import { ProjectArchiveGrid } from "@/components/projects/ProjectArchiveGrid";
import { FeaturedProjectsExpand } from "@/components/projects/FeaturedProjectsExpand";
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

      <ProjectArchiveGrid projects={archiveProjects} />

      <FeaturedProjectsExpand projects={featuredProjects} />
    </Section>
  );
}
