import Image from "next/image";

import { cn } from "@/lib/cn";
import { projectCoverFrame, projectCoverGrid } from "@/lib/ui/project-classes";

type ProjectMediaAspect = "video" | "square" | "wide";

interface ProjectMediaProps {
  src: string;
  alt: string;
  label?: string;
  aspect?: ProjectMediaAspect;
  priority?: boolean;
  interactive?: boolean;
  className?: string;
}

const aspectClass: Record<ProjectMediaAspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export function ProjectMedia({
  src,
  alt,
  label,
  aspect = "video",
  priority = false,
  interactive = true,
  className,
}: ProjectMediaProps) {
  return (
    <div className={cn(projectCoverFrame, aspectClass[aspect], className)}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className={cn(
          "h-full w-full object-cover transition-[filter,transform] duration-300",
          interactive && "grayscale group-hover:scale-[1.02] group-hover:grayscale-0",
        )}
      />
      <div className={projectCoverGrid} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-background/10 to-transparent"
        aria-hidden
      />
      {label ? (
        <p className="pointer-events-none absolute bottom-3 left-4 font-mono text-xs text-foreground/75">
          {label}
        </p>
      ) : null}
    </div>
  );
}
