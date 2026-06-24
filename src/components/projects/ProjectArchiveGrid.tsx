import { ArrowUpRight } from "lucide-react";

import { ProjectArchiveCard } from "@/components/projects/ProjectArchiveCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";
import type { ArchiveProject } from "@/types/content";

interface ProjectArchiveGridProps {
  projects: ArchiveProject[];
  embedded?: boolean;
}

export function ProjectArchiveGrid({ projects, embedded = false }: ProjectArchiveGridProps) {
  const { archive } = homeContent.projects;

  if (projects.length === 0) {
    return null;
  }

  return (
    <div>
      <div
        className={cn(
          "mb-10 flex flex-col gap-3",
          embedded ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
        )}
      >
        <div className={cn(embedded && "mx-auto")}>
          {!embedded ? (
            <p className="font-mono text-xs tracking-wide text-accent">{archive.eyebrow}</p>
          ) : null}
          <h3
            className={cn(
              "font-semibold tracking-tight text-foreground",
              embedded ? "text-2xl" : "mt-2 text-xl sm:text-2xl",
            )}
          >
            {archive.title}
          </h3>
        </div>

        {archive.viewArchive ? (
          <ExternalLink
            href={archive.viewArchive.href}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 font-mono text-sm text-accent no-underline transition-colors hover:text-foreground hover:no-underline",
              embedded && "justify-center",
            )}
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
