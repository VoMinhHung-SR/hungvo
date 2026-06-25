import { siteConfig } from "@/content/site.config";
import type { ArchiveProject } from "@/types/content";

/** Sample noteworthy projects — replace with real side projects when ready. */
const github = siteConfig.social.github;

export const noteworthyProjects: ArchiveProject[] = [
  {
    id: "dev-notes",
    title: "Dev Notes",
    description:
      "Minimal note-taking app for developers with markdown support, tags, and fast full-text search.",
    techStack: ["Next.js", "TypeScript", "Prisma"],
    repoUrl: github,
  },
  {
    id: "commit-graph",
    title: "Commit Graph",
    description:
      "GitHub contribution-style visualizer for local repos — inspect activity patterns by author and branch.",
    techStack: ["React", "D3.js", "Node.js"],
    repoUrl: github,
  },
  {
    id: "snippet-shelf",
    title: "Snippet Shelf",
    description:
      "Browser extension to save, tag, and sync code snippets across machines with one-click copy.",
    techStack: ["TypeScript", "Chrome APIs", "Tailwind"],
    repoUrl: github,
  },
];
