import { homeContent } from "@/content/home";
import {
  FeaturedProject,
  ProjectArchiveCard,
} from "@/components/projects/FeaturedProject";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getArchiveProjects, getFeaturedProjects } from "@/lib/content";

export function Projects() {
  const featured = getFeaturedProjects();
  const archive = getArchiveProjects();
  const { title, archiveTitle } = homeContent.projects;

  return (
    <Section id="projects">
      <SectionHeading index="03">{title}</SectionHeading>
      <div className="flex flex-col gap-24">
        {featured.map((project, index) => (
          <FeaturedProject
            key={project.slug}
            project={project}
            reversed={index % 2 === 1}
          />
        ))}
      </div>

      {archive.length > 0 ? (
        <div className="mt-24">
          <h3 className="mb-12 text-center text-2xl font-semibold text-foreground">
            {archiveTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((project) => (
              <ProjectArchiveCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
