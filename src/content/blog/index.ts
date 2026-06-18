import type { PostEntry } from "@/types/content";
import { validatePosts } from "@/lib/content/validate-posts";

import BuildingWithNextjs, {
  meta as buildingWithNextjsMeta,
} from "./building-with-nextjs.mdx";

const posts = [
  { ...buildingWithNextjsMeta, Content: BuildingWithNextjs },
] as const satisfies readonly PostEntry[];

validatePosts("blog", posts);

export const allBlogPosts = [...posts]
  .filter((post) => !post.draft)
  .sort((a, b) => b.seo.publishedAt.localeCompare(a.seo.publishedAt));

export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return allBlogPosts.map((post) => post.slug);
}
