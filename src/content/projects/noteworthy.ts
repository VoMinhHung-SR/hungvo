import type { ArchiveProject } from "@/types/content";

export const noteworthyProjects: ArchiveProject[] = [
  {
    id: "avs-adblock-extension",
    title: "AnimeVietsub AdBlock",
    description:
      "Chrome MV3 extension and Tampermonkey script to reduce static ads, popups, and pause-ad overlays on anime streaming sites.",
    techStack: ["JavaScript", "Chrome MV3", "Tampermonkey"],
    repoUrl: "https://github.com/VoMinhHung-SR/avs_adblock_extension",
  },
  {
    id: "data-scraper-tool",
    title: "Data Scraper Tool",
    description:
      "Chrome extension to extract tables, links, and custom CSS targets from web pages — with JSON/CSV export and optional presets for a few specific sites.",
    techStack: ["JavaScript", "Chrome APIs", "HTML"],
    repoUrl: "https://github.com/VoMinhHung-SR/data_scraper_tool",
  },
  {
    id: "hide-roads",
    title: "HideRoAds",
    description:
      "Lightweight Chrome extension that hides intrusive ads and sponsored blocks while browsing — built for a cleaner reading experience.",
    techStack: ["JavaScript", "Chrome APIs", "CSS"],
    repoUrl: "https://github.com/VoMinhHung-SR/HideRoAds",
  }
];
