import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { CaseStudy } from "@/types/content";

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  const { title, description, role, timeline, techStack, liveUrl, repoUrl } =
    caseStudy;

  return (
    <header className="flex flex-col gap-6 border-b border-border pb-8">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-sm text-accent">Case Study</p>
        <h1 className="text-section text-foreground">{title}</h1>
        <p className="text-lg text-muted">{description}</p>
      </div>

      <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <div>
          <dt className="sr-only">Role</dt>
          <dd>
            <span className="text-foreground">{role}</span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Timeline</dt>
          <dd>{timeline}</dd>
        </div>
      </dl>

      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {(liveUrl || repoUrl) && (
        <div className="flex flex-wrap gap-4 text-sm">
          {liveUrl ? (
            <ExternalLink href={liveUrl}>Live demo</ExternalLink>
          ) : null}
          {repoUrl ? (
            <ExternalLink href={repoUrl}>Source code</ExternalLink>
          ) : null}
        </div>
      )}

      <figure className="overflow-hidden rounded-lg border border-border bg-surface">
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.heroImageAlt}
          width={1600}
          height={900}
          className="h-auto w-full"
          priority
        />
      </figure>
    </header>
  );
}
