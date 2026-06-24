"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ProjectIndexRow } from "@/components/projects/ProjectIndexRow";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";
import type { ProjectCard } from "@/types/content";

interface FeaturedProjectsExpandProps {
  projects: ProjectCard[];
}

export function FeaturedProjectsExpand({ projects }: FeaturedProjectsExpandProps) {
  const [open, setOpen] = useState(false);
  const { showMore } = homeContent.projects;

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="flex justify-center border-t border-border pt-10">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 font-mono text-sm text-accent transition-colors hover:text-foreground"
        >
          {open ? showMore.lessLabel : showMore.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
            aria-hidden
          />
        </button>
      </div>

      {open ? (
        <div className="mt-10 flex flex-col border-t border-border pt-10">
          {projects.map((project, index) => (
            <ProjectIndexRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
