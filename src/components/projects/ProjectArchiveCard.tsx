import { Folder } from "lucide-react";

import {
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InternalLink } from "@/components/ui/Link";
import {
  projectArchiveCard,
  projectArchiveTech,
} from "@/lib/ui/project-classes";
import type { ArchiveProject } from "@/types/content";

interface ProjectArchiveCardProps {
  project: ArchiveProject;
}

export function ProjectArchiveCard({ project }: ProjectArchiveCardProps) {
  const titleHref = project.href ?? project.repoUrl ?? project.liveUrl;

  return (
    <article className={projectArchiveCard}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <Folder
          className="h-8 w-8 shrink-0 text-accent"
          strokeWidth={1.25}
          aria-hidden
        />
        <div className="flex items-center gap-3">
          {project.repoUrl ? (
            <ExternalLink
              href={project.repoUrl}
              aria-label={`${project.title} source code`}
              className="text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4.5 w-4.5" />
            </ExternalLink>
          ) : null}
          {project.liveUrl ? (
            <ExternalLink
              href={project.liveUrl}
              aria-label={`${project.title} live demo`}
              className="text-muted transition-colors hover:text-accent"
            >
              <ExternalLinkIcon className="h-4.5 w-4.5" />
            </ExternalLink>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {titleHref ? (
            project.href ? (
              <InternalLink
                href={project.href}
                className="transition-colors group-hover:text-accent"
              >
                {project.title}
              </InternalLink>
            ) : (
              <ExternalLink
                href={titleHref}
                className="text-inherit no-underline transition-colors group-hover:text-accent hover:text-accent hover:no-underline"
              >
                {project.title}
              </ExternalLink>
            )
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>

      <ul className={projectArchiveTech} aria-label="Tech stack">
        {project.techStack.map((tech, index) => (
          <li key={tech} className="inline">
            {index > 0 ? (
              <span className="mx-1.5" aria-hidden>
                ·
              </span>
            ) : null}
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
