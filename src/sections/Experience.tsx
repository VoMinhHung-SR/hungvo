import { homeContent } from "@/content/home";
import { ExperienceTabs } from "@/components/experience/ExperienceTabs";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const { title, items } = homeContent.experience;

  return (
    <Section id="experience">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="02">{title}</SectionHeading>
        <ExperienceTabs items={items} />
      </div>
    </Section>
  );
}
