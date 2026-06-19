import { homeContent } from "@/content/home";
import { ContentCard } from "@/components/ui/ContentCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { title, paragraphs } = homeContent.about;

  return (
    <Section id="about">
      <SectionHeading index="01" className="mb-8">
        {title}
      </SectionHeading>
      <ContentCard className="max-w-2xl">
        <div className="flex flex-col gap-4 leading-relaxed text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ContentCard>
    </Section>
  );
}
