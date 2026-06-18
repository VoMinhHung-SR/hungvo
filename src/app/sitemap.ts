import type { MetadataRoute } from "next";

import { allBlogPosts, allNotes } from "@/lib/content";
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

  const blogIndexEntry: MetadataRoute.Sitemap[number] = {
    url: new URL("/blog", siteConfig.url).toString(),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const blogArticleEntries: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: new Date(post.seo.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const notesIndexEntry: MetadataRoute.Sitemap[number] = {
    url: new URL("/notes", siteConfig.url).toString(),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const noteArticleEntries: MetadataRoute.Sitemap = allNotes.map((note) => ({
    url: new URL(`/notes/${note.slug}`, siteConfig.url).toString(),
    lastModified: new Date(note.seo.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
    blogIndexEntry,
    ...blogArticleEntries,
    notesIndexEntry,
    ...noteArticleEntries,
  ];
}
