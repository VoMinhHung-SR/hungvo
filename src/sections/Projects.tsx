import Image from "next/image";

import { homeContent } from "@/content/home";
import type { ProjectCard } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/ContentCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/lib/content";
import { imageFrame } from "@/lib/ui/card-classes";
import { cn } from "@/lib/cn";

function ProjectCardItem({ project }: { project: ProjectCard }) {
  const { viewCaseStudy } = homeContent.projects;

  return (
    <ContentCard as="article" hover className="group flex flex-col gap-5">
      <div className={cn(imageFrame, "relative")}>
        <Image
          src={project.image}
          alt={`${project.title} cover`}
          width={800}
          height={450}
          className="aspect-video h-auto w-full object-cover transition duration-150 group-hover:brightness-90"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-foreground transition-colors duration-150 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        <div>
          <Button href={`/projects/${project.slug}`} variant="ghost">
            {viewCaseStudy} →
          </Button>
        </div>
      </div>
    </ContentCard>
  );
}

export function Projects() {
  const projects = getFeaturedProjects();
  const { title } = homeContent.projects;

  return (
    <Section id="projects">
      <SectionHeading index="02" className="mb-12">{title}</SectionHeading>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCardItem key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
