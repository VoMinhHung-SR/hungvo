import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySectionRenderer } from "@/components/case-study/CaseStudySectionRenderer";
import { getCaseStudyMetadata } from "@/lib/content/case-study-metadata";
import { validateCaseStudies } from "@/lib/content/validate-case-studies";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/structured-data";

validateCaseStudies();

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found" });
  }

  const metadata = getCaseStudyMetadata(project);

  return createMetadata({
    title: metadata.title,
    description: metadata.description,
    path: metadata.path,
    image: metadata.image,
    type: "article",
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const metadata = getCaseStudyMetadata(project);
  const structuredData = articleSchema({
    title: metadata.title,
    description: metadata.description,
    path: metadata.path,
    datePublished: project.seo.publishedAt,
    dateModified: project.seo.updatedAt,
    image: metadata.image,
    keywords: project.seo.keywords,
    about: project.techStack,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CaseStudyHeader caseStudy={project} />
      <div className="flex flex-col gap-12 pt-12">
        {project.sections.map((section) => (
          <CaseStudySectionRenderer key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}
