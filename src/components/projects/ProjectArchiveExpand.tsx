"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { ProjectArchiveGrid } from "@/components/projects/ProjectArchiveGrid";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";
import type { ArchiveProject } from "@/types/content";

const ARCHIVE_INITIAL_VISIBLE = 6;

const panelEase = [0.25, 0.1, 0.25, 1] as const;

interface ProjectArchiveExpandProps {
  projects: ArchiveProject[];
  title: string;
  description?: string;
  viewArchive?: {
    label: string;
    href: string;
  };
  initialVisible?: number;
}

export function ProjectArchiveExpand({
  projects,
  title,
  description,
  viewArchive,
  initialVisible = ARCHIVE_INITIAL_VISIBLE,
}: ProjectArchiveExpandProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { showMore } = homeContent.projects;
  const needsExpand = projects.length > initialVisible;

  if (projects.length === 0) {
    return null;
  }

  const primaryProjects = needsExpand
    ? projects.slice(0, initialVisible)
    : projects;
  const extraProjects = needsExpand ? projects.slice(initialVisible) : [];

  return (
    <>
      <ProjectArchiveGrid
        projects={primaryProjects}
        title={title}
        description={description}
        viewArchive={viewArchive}
        animateInView
      />

      <AnimatePresence initial={false}>
        {open && extraProjects.length > 0 ? (
          <motion.div
            key="archive-extra"
            className="mt-4 overflow-hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={
              reduceMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 1, height: "auto", transition: { duration: 0.4, ease: panelEase } }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.3, ease: panelEase },
                  }
            }
          >
            <ProjectArchiveGrid
              projects={extraProjects}
              title=""
              showHeader={false}
              animated
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {needsExpand ? (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
          >
            {open ? showMore.lessLabel : showMore.label}
          </Button>
        </div>
      ) : null}
    </>
  );
}
