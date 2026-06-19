import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site.config";
import { ArrowList } from "@/components/ui/ArrowList";
import { ProfileFrame } from "@/components/ui/ProfileFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  const { title, paragraphs, skills, profileImage, profileImageAlt } =
    homeContent.about;

  return (
    <Section id="about">
      <SectionHeading index="01">{title}</SectionHeading>
      <div className="grid items-start gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div className="flex flex-col gap-4 leading-relaxed text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ArrowList items={skills} className="mt-4" />
        </div>
        <ProfileFrame
          alt={profileImageAlt}
          src={profileImage}
          initials={getInitials(siteConfig.author.name)}
        />
      </div>
    </Section>
  );
}
