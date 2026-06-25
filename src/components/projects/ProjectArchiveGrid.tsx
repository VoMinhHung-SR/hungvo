"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ProjectArchiveCard } from "@/components/projects/ProjectArchiveCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { ArchiveProject } from "@/types/content";

interface ProjectArchiveGridProps {
  projects: ArchiveProject[];
  title: string;
  eyebrow?: string;
  description?: string;
  viewArchive?: {
    label: string;
    href: string;
  };
  className?: string;
  animated?: boolean;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const headerMotion = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
      delay: 0.28 + index * 0.09,
    },
  }),
};

function GridHeader({
  eyebrow,
  title,
  description,
  viewArchive,
}: Pick<ProjectArchiveGridProps, "eyebrow" | "title" | "description" | "viewArchive">) {
  return (
    <div className="mb-10 flex flex-col items-center gap-3 text-center">
      {eyebrow ? (
        <p className="font-mono text-xs tracking-wide text-accent">{eyebrow}</p>
      ) : null}
      <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
      {viewArchive ? (
        <ExternalLink
          href={viewArchive.href}
          className="inline-flex items-center gap-1.5 font-mono text-sm text-accent no-underline transition-colors hover:text-foreground hover:no-underline"
        >
          {viewArchive.label}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </ExternalLink>
      ) : null}
    </div>
  );
}

export function ProjectArchiveGrid({
  projects,
  title,
  eyebrow,
  description,
  viewArchive,
  className,
  animated = false,
}: ProjectArchiveGridProps) {
  const reduceMotion = useReducedMotion();

  if (projects.length === 0) {
    return null;
  }

  if (!animated || reduceMotion) {
    return (
      <div className={className}>
        <GridHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          viewArchive={viewArchive}
        />
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

  return (
    <div className={className}>
      <motion.div
        className="mb-10 flex flex-col items-center gap-3 text-center"
        variants={headerMotion}
        initial="hidden"
        animate="show"
      >
        {eyebrow ? (
          <p className="font-mono text-xs tracking-wide text-accent">{eyebrow}</p>
        ) : null}
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
        ) : null}
        {viewArchive ? (
          <ExternalLink
            href={viewArchive.href}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent no-underline transition-colors hover:text-foreground hover:no-underline"
          >
            {viewArchive.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </ExternalLink>
        ) : null}
      </motion.div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
            className="flex min-w-0"
            custom={index}
            variants={cardMotion}
            initial="hidden"
            animate="show"
          >
            <ProjectArchiveCard project={project} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
