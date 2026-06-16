import type { MetadataRoute } from "next";

import { getAllProjectSlugs } from "@/content/projects";
import { siteConfig } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: new URL(`/projects/${slug}`, siteConfig.url).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
