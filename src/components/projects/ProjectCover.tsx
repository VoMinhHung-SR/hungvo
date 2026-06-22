import Image from "next/image";

import { cn } from "@/lib/cn";
import { projectCoverFrame, projectCoverGrid } from "@/lib/ui/project-classes";

interface ProjectCoverProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function ProjectCover({ src, alt, title, className }: ProjectCoverProps) {
  return (
    <div className={cn(projectCoverFrame, className)}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        className="aspect-video h-full w-full object-cover grayscale transition-[filter,transform] duration-300 group-hover:scale-[1.02] group-hover:grayscale-0"
      />
      <div className={projectCoverGrid} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent"
        aria-hidden
      />
      <p className="pointer-events-none absolute bottom-3 left-4 font-mono text-xs text-foreground/80">
        {title}
      </p>
    </div>
  );
}
