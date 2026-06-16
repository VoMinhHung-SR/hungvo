import { homeContent } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { title, paragraphs } = homeContent.about;

  return (
    <Section id="about">
      <SectionHeading className="mb-8">{title}</SectionHeading>
      <div className="flex max-w-2xl flex-col gap-4 text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
