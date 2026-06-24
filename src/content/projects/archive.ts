import { siteConfig } from "@/content/site.config";
import type { ArchiveProject } from "@/types/content";

/** Sample archive entries — replace with real side projects when ready. */
const github = siteConfig.social.github;

export const archiveProjects: ArchiveProject[] = [
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
  {
    id: "api-playground",
    title: "API Playground",
    description:
      "Lightweight REST client for testing endpoints, saving request collections, and sharing examples.",
    techStack: ["React", "TanStack Query", "Zod"],
    repoUrl: github,
    liveUrl: github,
  },
  {
    id: "focus-timer",
    title: "Focus Timer",
    description:
      "Pomodoro timer with session history, ambient sounds, and a distraction-free full-screen mode.",
    techStack: ["Next.js", "Framer Motion", "Local Storage"],
    repoUrl: github,
  },
  {
    id: "css-gradient-lab",
    title: "CSS Gradient Lab",
    description:
      "Interactive tool to compose mesh gradients, export CSS, and preview palettes on real UI mockups.",
    techStack: ["Vue", "Canvas", "Vite"],
    repoUrl: github,
    liveUrl: github,
  },
];
