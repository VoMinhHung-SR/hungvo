"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { ProjectArchiveGrid } from "@/components/projects/ProjectArchiveGrid";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";
import type { ArchiveProject } from "@/types/content";

interface LeetcodeGamesExpandProps {
  projects: ArchiveProject[];
}

const panelEase = [0.25, 0.1, 0.25, 1] as const;

export function LeetcodeGamesExpand({ projects }: LeetcodeGamesExpandProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { showMore, leetcodeGames } = homeContent.projects;

  if (projects.length === 0) {
    return null;
  }

  return (
    <>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="leetcode-panel"
            className="mt-16 overflow-hidden border-t border-border pt-14"
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
              projects={projects}
              eyebrow={leetcodeGames.eyebrow}
              title={leetcodeGames.title}
              description={leetcodeGames.description}
              animated
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-16 flex justify-center border-t border-border pt-14">
        <Button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? showMore.lessLabel : showMore.label}
        </Button>
      </div>
    </>
  );
}
