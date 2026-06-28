import type { ArchiveProject } from "@/types/content";

export const noteworthyProjects: ArchiveProject[] = [
  {
    id: "avs-adblock-extension",
    title: "AnimeVietsub AdBlock",
    description:
      "MV3 extension + Tampermonkey script from one shared core — blocks ads, popups, and pause overlays on anime sites.",
    techStack: ["JavaScript", "Chrome MV3", "Tampermonkey"],
    repoUrl: "https://github.com/VoMinhHung-SR/avs_adblock_extension",
  },
  {
    id: "data-scraper-tool",
    title: "Data Scraper Tool",
    description:
      "Scrape tables, links, or custom CSS targets from any page — highlight preview, JSON/CSV export, batch presets.",
    techStack: ["JavaScript", "Chrome APIs", "HTML"],
    repoUrl: "https://github.com/VoMinhHung-SR/data_scraper_tool",
  },
  {
    id: "hide-roads",
    title: "HideRoAds",
    description:
      "Lightweight MV3 extension that hides ads and sponsored blocks on streaming sites.",
    techStack: ["JavaScript", "Chrome MV3", "CSS"],
    repoUrl: "https://github.com/VoMinhHung-SR/HideRoAds",
  },
];
