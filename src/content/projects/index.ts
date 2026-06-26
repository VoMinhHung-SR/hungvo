import type { CaseStudy, ProjectCard } from "@/types/content";

import { interviewFrogde } from "./interview-frogde";
import { oupharmacyStore } from "./oupharmacy-store";
import { pharmacyManagement } from "./pharmacy-management";

const caseStudies = {
  "interview-frogde": interviewFrogde,
  "oupharmacy-store": oupharmacyStore,
  "pharmacy-management": pharmacyManagement,
} as const satisfies Record<string, CaseStudy>;

export type ProjectSlug = keyof typeof caseStudies;

export const allCaseStudies: CaseStudy[] = Object.values(caseStudies);

const featuredOrder = [
  "interview-frogde",
  "oupharmacy-store",
  "pharmacy-management",
] as const satisfies readonly ProjectSlug[];

export const featuredProjects: ProjectCard[] = featuredOrder
  .map((slug) => allCaseStudies.find((project) => project.slug === slug))
  .filter((project): project is CaseStudy => Boolean(project?.featured));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  if (!(slug in caseStudies)) {
    return undefined;
  }

  return caseStudies[slug as ProjectSlug];
}

export function getAllProjectSlugs(): ProjectSlug[] {
  return Object.keys(caseStudies) as ProjectSlug[];
}
