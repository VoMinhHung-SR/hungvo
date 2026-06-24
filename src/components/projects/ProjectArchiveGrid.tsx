import { ArrowUpRight } from "lucide-react";

import { ProjectArchiveCard } from "@/components/projects/ProjectArchiveCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { homeContent } from "@/content/home";
import type { ArchiveProject } from "@/types/content";

interface ProjectArchiveGridProps {
  projects: ArchiveProject[];
}

export function ProjectArchiveGrid({ projects }: ProjectArchiveGridProps) {
  const { archive } = homeContent.projects;

  if (projects.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          {archive.title}
        </h3>
        {archive.viewArchive ? (
          <ExternalLink
            href={archive.viewArchive.href}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent no-underline transition-colors hover:text-foreground hover:no-underline"
          >
            {archive.viewArchive.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </ExternalLink>
        ) : null}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id} className="flex min-w-0">
            <ProjectArchiveCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
