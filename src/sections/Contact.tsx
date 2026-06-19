import { siteConfig } from "@/content/site.config";
import { homeContent } from "@/content/home";
import { ContentCard } from "@/components/ui/ContentCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    text: siteConfig.author.email,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    text: "GitHub",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    text: "LinkedIn",
  },
] as const;

export function Contact() {
  const { title } = homeContent.contact;

  return (
    <Section id="contact">
      <SectionHeading index="04" className="mb-8 max-w-lg">
        {title}
      </SectionHeading>
      <ContentCard className="max-w-xl">
        <div className="flex flex-col gap-5">
          {contactLinks.map((link) => (
            <div key={link.label} className="flex flex-col gap-1">
              <span className="font-mono text-xs text-muted">{link.label}</span>
              <ExternalLink href={link.href} className="text-lg">
                {link.text}
              </ExternalLink>
            </div>
          ))}
        </div>
      </ContentCard>
    </Section>
  );
}
