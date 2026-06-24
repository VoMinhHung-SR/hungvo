import {
  allCaseStudies,
  featuredProjects,
  getAllProjectSlugs,
  getCaseStudyBySlug,
  type ProjectSlug,
} from "@/content/projects";
import { archiveProjects } from "@/content/projects/archive";
import {
  allBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/content/blog";
import { allNotes, getAllNoteSlugs, getNoteBySlug } from "@/content/notes";
import type { CaseStudy, ProjectCard, ArchiveProject } from "@/types/content";

export function getAllProjects(): ProjectCard[] {
  return allCaseStudies;
}

export function getFeaturedProjects(): ProjectCard[] {
  return featuredProjects;
}

export function getArchiveProjects(): ArchiveProject[] {
  return archiveProjects;
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
export type { CaseStudy, ProjectCard, ProjectSlug, ArchiveProject };
export type {
  PostCollection,
  PostEntry,
  PostMeta,
  PostSeo,
} from "@/types/content";
