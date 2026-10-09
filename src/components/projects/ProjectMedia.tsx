import Image from "next/image";

import { cn } from "@/lib/cn";
import { projectCoverFrame } from "@/lib/ui/project-classes";

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
          "h-full w-full object-cover transition-transform duration-300",
          interactive && "group-hover:scale-[1.02]",
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/55 via-transparent to-transparent"
        aria-hidden
      />
      {label ? (
        <p className="pointer-events-none absolute bottom-3 left-4 font-mono text-xs text-foreground/85">
          {label}
        </p>
      ) : null}
    </div>
  );
}
