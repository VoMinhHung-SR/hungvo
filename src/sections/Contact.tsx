import { siteConfig } from "@/content/site.config";
import { homeContent } from "@/content/home";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const { title } = homeContent.contact;
  const { email } = siteConfig.author;
  const { github, linkedin } = siteConfig.social;

  return (
    <Section id="contact">
      <SectionHeading className="mb-8 max-w-lg">{title}</SectionHeading>
      <div className="flex flex-col gap-4">
        <ExternalLink href={`mailto:${email}`} className="text-lg">
          {email}
        </ExternalLink>
        <ExternalLink href={github} className="text-lg">
          GitHub
        </ExternalLink>
        <ExternalLink href={linkedin} className="text-lg">
          LinkedIn
        </ExternalLink>
      </div>
    </Section>
  );
}
