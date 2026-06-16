import { assertNever } from "@/lib/assert-never";
import type { CaseStudySection } from "@/types/content";
import { BulletSection } from "@/components/case-study/sections/BulletSection";
import { GallerySection } from "@/components/case-study/sections/GallerySection";
import { MetricsSection } from "@/components/case-study/sections/MetricsSection";
import { TextSection } from "@/components/case-study/sections/TextSection";

interface CaseStudySectionRendererProps {
  section: CaseStudySection;
}

export function CaseStudySectionRenderer({
  section,
}: CaseStudySectionRendererProps) {
  switch (section.type) {
    case "text":
      return <TextSection section={section} />;
    case "bullets":
      return <BulletSection section={section} />;
    case "metrics":
      return <MetricsSection section={section} />;
    case "gallery":
      return <GallerySection section={section} />;
    default:
      return assertNever(section);
  }
}
