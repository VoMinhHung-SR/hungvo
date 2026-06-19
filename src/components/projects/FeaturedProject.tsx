import Image from "next/image";

import { homeContent } from "@/content/home";
import {
  ExternalLinkIcon,
  FolderIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InternalLink } from "@/components/ui/Link";
import { getCaseStudyBySlug } from "@/content/projects";
import { imageFrame } from "@/lib/ui/card-classes";
import { featuredPanel, archiveCard } from "@/lib/ui/project-classes";
import { cn } from "@/lib/cn";
import type { ProjectCard } from "@/types/content";

interface FeaturedProjectProps {
  project: ProjectCard;
  reversed?: boolean;
}

export function FeaturedProject({ project, reversed = false }: FeaturedProjectProps) {
  const { featuredLabel } = homeContent.projects;
  const caseStudy = getCaseStudyBySlug(project.slug);
  const repoUrl = caseStudy?.repoUrl;
  const liveUrl = caseStudy?.liveUrl;

  return (
    <article
      className={cn(
        "grid items-center gap-6 lg:grid-cols-12 lg:gap-4",
        reversed && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative lg:col-span-7">
        <InternalLink
          href={`/projects/${project.slug}`}
          className={cn(imageFrame, "group block")}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={800}
            height={500}
            className="aspect-video h-auto w-full object-cover transition-[filter] duration-300 group-hover:brightness-75"
          />
        </InternalLink>
      </div>

      <div
        className={cn(
          "relative z-10 lg:col-span-6",
          reversed ? "lg:-mr-16" : "lg:-ml-16",
        )}
      >
        <div className={featuredPanel}>
          <p className="font-mono text-sm text-accent">{featuredLabel}</p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">
            <InternalLink
              href={`/projects/${project.slug}`}
              className="hover:text-accent"
            >
              {project.title}
            </InternalLink>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            {repoUrl ? (
              <ExternalLink
                href={repoUrl}
                aria-label={`${project.title} source code`}
                className="text-muted hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5" />
              </ExternalLink>
            ) : null}
            {liveUrl ? (
              <ExternalLink
                href={liveUrl}
                aria-label={`${project.title} live demo`}
                className="text-muted hover:text-accent"
              >
                <ExternalLinkIcon className="h-5 w-5" />
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

interface ProjectArchiveCardProps {
  project: ProjectCard;
}

export function ProjectArchiveCard({ project }: ProjectArchiveCardProps) {
  const caseStudy = getCaseStudyBySlug(project.slug);
  const repoUrl = caseStudy?.repoUrl;
  const liveUrl = caseStudy?.liveUrl;

  return (
    <article className={cn(archiveCard, "group")}>
      <div className="flex items-center justify-between">
        <FolderIcon className="h-8 w-8 text-accent" />
        <div className="flex items-center gap-3">
          {repoUrl ? (
            <ExternalLink
              href={repoUrl}
              aria-label={`${project.title} source code`}
              className="text-muted hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
            </ExternalLink>
          ) : null}
          {liveUrl ? (
            <ExternalLink
              href={liveUrl}
              aria-label={`${project.title} live demo`}
              className="text-muted hover:text-accent"
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </ExternalLink>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          <InternalLink
            href={`/projects/${project.slug}`}
            className="hover:text-accent"
          >
            {project.title}
          </InternalLink>
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
