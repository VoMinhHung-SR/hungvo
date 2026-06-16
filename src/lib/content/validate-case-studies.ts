import fs from "node:fs";
import path from "node:path";

import { allCaseStudies } from "@/content/projects";
import type { CaseStudy } from "@/types/content";

function publicPath(assetPath: string): string {
  const normalized = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return path.join(process.cwd(), "public", normalized);
}

function assertFileExists(caseStudy: CaseStudy, assetPath: string, label: string) {
  const fullPath = publicPath(assetPath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(
      `[case-study:${caseStudy.slug}] Missing ${label} at public/${assetPath.replace(/^\//, "")}`,
    );
  }
}

function validateSeo(caseStudy: CaseStudy) {
  const { seo } = caseStudy;

  if (!seo.publishedAt) {
    throw new Error(`[case-study:${caseStudy.slug}] seo.publishedAt is required`);
  }

  if (!seo.updatedAt) {
    throw new Error(`[case-study:${caseStudy.slug}] seo.updatedAt is required`);
  }

  if (!seo.ogImage) {
    throw new Error(`[case-study:${caseStudy.slug}] seo.ogImage is required`);
  }

  if (!seo.keywords.length) {
    throw new Error(`[case-study:${caseStudy.slug}] seo.keywords must include at least one entry`);
  }
}

function validateCaseStudy(caseStudy: CaseStudy) {
  if (!caseStudy.heroImageAlt.trim()) {
    throw new Error(`[case-study:${caseStudy.slug}] heroImageAlt is required`);
  }

  if (!caseStudy.sections.length) {
    throw new Error(`[case-study:${caseStudy.slug}] sections must not be empty`);
  }

  validateSeo(caseStudy);

  assertFileExists(caseStudy, caseStudy.image, "card image");
  assertFileExists(caseStudy, caseStudy.heroImage, "hero image");
  assertFileExists(caseStudy, caseStudy.seo.ogImage, "og image");

  for (const section of caseStudy.sections) {
    if (section.type !== "gallery") {
      continue;
    }

    for (const image of section.images) {
      if (!image.alt.trim()) {
        throw new Error(
          `[case-study:${caseStudy.slug}] gallery image alt text is required`,
        );
      }

      assertFileExists(caseStudy, image.src, `gallery image (${section.id})`);
    }
  }
}

export function validateCaseStudies() {
  for (const caseStudy of allCaseStudies) {
    validateCaseStudy(caseStudy);
  }
}
