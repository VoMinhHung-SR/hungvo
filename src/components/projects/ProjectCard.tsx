import { ArrowRight } from "lucide-react";

import { homeContent } from "@/content/home";
import {
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { TechPills } from "@/components/projects/TechPills";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InternalLink } from "@/components/ui/Link";
import { getCaseStudyBySlug } from "@/content/projects";
import { projectCard, projectCardBody } from "@/lib/ui/project-classes";
import { cn } from "@/lib/cn";
import type { ProjectCard as ProjectCardData } from "@/types/content";

interface ProjectCardProps {
  project: ProjectCardData;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { caseStudyLabel } = homeContent.projects;
  const caseStudy = getCaseStudyBySlug(project.slug);
  const repoUrl = caseStudy?.repoUrl;
  const liveUrl = caseStudy?.liveUrl;
  const meta = [caseStudy?.timeline, caseStudy?.role].filter(Boolean).join(" · ");

  return (
    <article className={cn(projectCard, className)}>
      <InternalLink href={`/projects/${project.slug}`} className="block">
        <ProjectCover
          src={project.image}
          alt={`${project.title} preview`}
          title={project.title}
        />
      </InternalLink>

      <div className={projectCardBody}>
        {meta ? (
          <p className="font-mono text-xs text-muted">{meta}</p>
        ) : null}

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            <InternalLink
              href={`/projects/${project.slug}`}
              className="hover:text-accent"
            >
              {project.title}
            </InternalLink>
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        </div>

        <TechPills items={project.techStack} />

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/60 pt-4">
          <InternalLink
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-foreground"
          >
            {caseStudyLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </InternalLink>

          <div className="flex items-center gap-3">
            {repoUrl ? (
              <ExternalLink
                href={repoUrl}
                aria-label={`${project.title} source code`}
                className="text-muted transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" />
              </ExternalLink>
            ) : null}
            {liveUrl ? (
              <ExternalLink
                href={liveUrl}
                aria-label={`${project.title} live demo`}
                className="text-muted transition-colors hover:text-accent"
              >
                <ExternalLinkIcon className="h-4 w-4" />
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
