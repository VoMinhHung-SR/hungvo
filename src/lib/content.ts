import {
  allCaseStudies,
  featuredProjects,
  getAllProjectSlugs,
  getCaseStudyBySlug,
} from "@/content/projects";
import type { CaseStudy, ProjectCard, ProjectSlug } from "@/types/content";

export function getAllProjects(): ProjectCard[] {
  return allCaseStudies;
}

export function getFeaturedProjects(): ProjectCard[] {
  return featuredProjects;
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudyBySlug(slug);
}

export { getAllProjectSlugs };
export type { CaseStudy, ProjectCard, ProjectSlug };
