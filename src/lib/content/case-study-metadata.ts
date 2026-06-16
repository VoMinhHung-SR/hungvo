import type { CaseStudy } from "@/types/content";
import { defaultOgImage } from "@/lib/seo/metadata";

export function getCaseStudyMetadata(caseStudy: CaseStudy) {
  return {
    title: caseStudy.seo.title ?? caseStudy.title,
    description: caseStudy.seo.description ?? caseStudy.description,
    image:
      caseStudy.seo.ogImage ??
      caseStudy.heroImage ??
      caseStudy.image ??
      defaultOgImage,
    path: `/projects/${caseStudy.slug}`,
  };
}
