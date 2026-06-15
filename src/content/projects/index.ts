import type { CaseStudy, ProjectCard, ProjectSlug } from "@/types/content";

import { interviewFrogde } from "./interview-frogde";
import { pharmacyManagement } from "./pharmacy-management";

const caseStudies: Record<ProjectSlug, CaseStudy> = {
  "interview-frogde": interviewFrogde,
  "pharmacy-management": pharmacyManagement,
};

export const allCaseStudies: CaseStudy[] = Object.values(caseStudies);

export const featuredProjects: ProjectCard[] = allCaseStudies.filter(
  (project) => project.featured,
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug as ProjectSlug];
}

export function getAllProjectSlugs(): ProjectSlug[] {
  return Object.keys(caseStudies) as ProjectSlug[];
}
