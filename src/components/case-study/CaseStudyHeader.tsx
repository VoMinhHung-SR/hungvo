import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
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
  const { title, description, role, timeline, techStack, liveUrl, repoUrl } =
    caseStudy;

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

      <figure className={cn(imageFrameMobile, "mt-2")}>
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.heroImageAlt}
          width={1600}
          height={900}
          className="h-auto w-full"
          priority
        />
      </figure>
    </PageIntro>
  );
}
