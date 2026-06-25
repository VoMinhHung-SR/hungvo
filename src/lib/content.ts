import {
  allCaseStudies,
  featuredProjects,
  getAllProjectSlugs,
  getCaseStudyBySlug,
  type ProjectSlug,
} from "@/content/projects";
import { leetcodeMiniGames } from "@/content/projects/leetcode-games";
import { noteworthyProjects } from "@/content/projects/noteworthy";
import {
  allBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/content/blog";
import { allNotes, getAllNoteSlugs, getNoteBySlug } from "@/content/notes";
import type { ArchiveProject, CaseStudy, ProjectCard } from "@/types/content";

export function getAllProjects(): ProjectCard[] {
  return allCaseStudies;
}

export function getFeaturedProjects(): ProjectCard[] {
  return featuredProjects;
}

export function getNoteworthyProjects(): ArchiveProject[] {
  return noteworthyProjects;
}

export function getLeetcodeMiniGames(): ArchiveProject[] {
  return leetcodeMiniGames;
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudyBySlug(slug);
}

export { getAllProjectSlugs };
export {
  allBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
  allNotes,
  getAllNoteSlugs,
  getNoteBySlug,
};
export type { ArchiveProject, CaseStudy, ProjectCard, ProjectSlug };
export type {
  PostCollection,
  PostEntry,
  PostMeta,
  PostSeo,
} from "@/types/content";
