import { LeetcodeGamesExpand } from "@/components/projects/LeetcodeGamesExpand";
import { ProjectArchiveGrid } from "@/components/projects/ProjectArchiveGrid";
import { ProjectIndexRow } from "@/components/projects/ProjectIndexRow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";
import {
  getFeaturedProjects,
  getLeetcodeMiniGames,
  getNoteworthyProjects,
} from "@/lib/content";

export function Projects() {
  const featuredProjects = getFeaturedProjects();
  const noteworthyProjects = getNoteworthyProjects();
  const leetcodeMiniGames = getLeetcodeMiniGames();
  const { title, subtitle, noteworthy } = homeContent.projects;

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

      <div className="mt-16 border-t border-border pt-14">
        <ProjectArchiveGrid
          projects={noteworthyProjects}
          title={noteworthy.title}
          viewArchive={noteworthy.viewArchive}
        />
        <LeetcodeGamesExpand projects={leetcodeMiniGames} />
      </div>
    </Section>
  );
}
