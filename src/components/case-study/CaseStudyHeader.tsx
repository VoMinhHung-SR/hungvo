import { Badge } from "@/components/ui/Badge";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { MetaRow } from "@/components/ui/MetaRow";
import { PageIntro } from "@/components/ui/PageIntro";
import { imageFrameMobile } from "@/lib/ui/card-classes";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/types/content";

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  const { title, description, role, timeline, techStack, liveUrl, repoUrl, repoLinks } =
    caseStudy;
  const sourceLinks =
    repoLinks ?? (repoUrl ? [{ label: "Source code", href: repoUrl }] : []);

  return (
    <PageIntro eyebrow="Case Study" title={title} description={description}>
      <MetaRow items={[{ value: role }, { value: timeline }]} />

      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {(liveUrl || sourceLinks.length > 0) && (
        <div className="flex flex-wrap gap-4 text-sm">
          {liveUrl ? (
            <ExternalLink href={liveUrl}>Live demo</ExternalLink>
          ) : null}
          {sourceLinks.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      )}

      <figure className={cn(imageFrameMobile, "group mt-2 overflow-hidden")}>
        <ProjectMedia
          src={caseStudy.heroImage}
          alt={caseStudy.heroImageAlt}
          label={title}
          aspect="wide"
          priority
          interactive={false}
        />
      </figure>
    </PageIntro>
  );
}
