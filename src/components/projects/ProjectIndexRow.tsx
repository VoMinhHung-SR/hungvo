import { ArrowRight } from "lucide-react";

import { homeContent } from "@/content/home";
import {
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { TechPills } from "@/components/projects/TechPills";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InternalLink } from "@/components/ui/Link";
import { getCaseStudyBySlug } from "@/content/projects";
import { projectIndexRow, projectIndexRowReversed } from "@/lib/ui/project-classes";
import { cn } from "@/lib/cn";
import type { ProjectCard as ProjectCardData } from "@/types/content";

interface ProjectIndexRowProps {
  project: ProjectCardData;
  index: number;
  className?: string;
}

export function ProjectIndexRow({ project, index, className }: ProjectIndexRowProps) {
  const { caseStudyLabel } = homeContent.projects;
  const caseStudy = getCaseStudyBySlug(project.slug);
  const repoLinks =
    caseStudy?.repoLinks ??
    (caseStudy?.repoUrl ? [{ label: "Source", href: caseStudy.repoUrl }] : []);
  const liveUrl = caseStudy?.liveUrl;
  const meta = [caseStudy?.timeline, caseStudy?.role].filter(Boolean).join(" · ");
  const indexLabel = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1;

  return (
    <article
      className={cn(projectIndexRow, reversed && projectIndexRowReversed, className)}
    >
      <span
        className={cn(
          "font-mono text-3xl leading-none text-border transition-colors duration-150 group-hover:text-accent lg:text-4xl",
          reversed ? "lg:order-3 lg:justify-self-end" : "lg:order-1",
        )}
        aria-hidden
      >
        {indexLabel}
      </span>

      <div
        className={cn(
          "flex min-w-0 flex-col gap-5 lg:order-2",
          reversed && "lg:items-end lg:text-right",
        )}
      >
        <div className="flex flex-col gap-2">
          {meta ? <p className="font-mono text-xs text-muted">{meta}</p> : null}
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            <InternalLink
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </InternalLink>
          </h3>
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <TechPills
          items={project.techStack}
          className={reversed ? "lg:justify-end" : undefined}
        />

        <div
          className={cn(
            "flex flex-wrap items-center gap-x-5 gap-y-2",
            reversed && "lg:justify-end",
          )}
        >
          <InternalLink
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-foreground"
          >
            {caseStudyLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </InternalLink>

          {repoLinks.map((link) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              aria-label={`${project.title} ${link.label}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              {link.label}
            </ExternalLink>
          ))}
          {liveUrl ? (
            <ExternalLink
              href={liveUrl}
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live
            </ExternalLink>
          ) : null}
        </div>
      </div>

      <InternalLink
        href={`/projects/${project.slug}`}
        className={cn(
          "block overflow-hidden rounded-[var(--radius-image)] ring-1 ring-border transition-[box-shadow,ring-color] duration-150 group-hover:shadow-[var(--glow-accent)] group-hover:ring-accent/40 lg:max-w-[18rem]",
          reversed ? "lg:order-1 lg:justify-self-start" : "lg:order-3 lg:justify-self-end",
        )}
      >
        <ProjectMedia
          src={project.image}
          alt={`${project.title} preview`}
          label={project.title}
          aspect="square"
        />
      </InternalLink>
    </article>
  );
}
