import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site.config";
import { TechPills } from "@/components/projects/TechPills";
import { ProfileFrame } from "@/components/ui/ProfileFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  const { title, paragraphs, pullQuote, skillGroups, profileImage, profileImageAlt } =
    homeContent.about;

  return (
    <Section id="about">
      <SectionHeading index="01">{title}</SectionHeading>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 leading-relaxed">
            <p className="text-pretty text-foreground">{paragraphs[0]}</p>
            <p className="text-pretty text-muted">{paragraphs[1]}</p>
          </div>

          <blockquote className="relative border-l-2 border-accent/70 py-1 pl-5">
            <p className="font-mono text-sm leading-relaxed text-foreground/90">
              {pullQuote}
            </p>
          </blockquote>

          <div className="flex flex-col gap-5 border-t border-border pt-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <SectionLabel className="mb-3">{group.label}</SectionLabel>
                <TechPills items={group.items} />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pt-2">
          <ProfileFrame
            alt={profileImageAlt}
            src={profileImage}
            initials={getInitials(siteConfig.author.name)}
            className="lg:ml-auto"
          />
        </div>
      </div>
    </Section>
  );
}
