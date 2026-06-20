import {
  allCaseStudies,
  featuredProjects,
  getAllProjectSlugs,
  getCaseStudyBySlug,
  type ProjectSlug,
} from "@/content/projects";
import {
  allBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/content/blog";
import { allNotes, getAllNoteSlugs, getNoteBySlug } from "@/content/notes";
import type { CaseStudy, ProjectCard } from "@/types/content";

export function getAllProjects(): ProjectCard[] {
  return allCaseStudies;
}

export function getFeaturedProjects(): ProjectCard[] {
  return featuredProjects;
}

export function getArchiveProjects(): ProjectCard[] {
  return allCaseStudies.filter((project) => !project.featured);
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
export type { CaseStudy, ProjectCard, ProjectSlug };
export type {
  PostCollection,
  PostEntry,
  PostMeta,
  PostSeo,
} from "@/types/content";
