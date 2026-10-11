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
  // Arbitrary 16/10 — denser than 16/9 in project rows; screenshots stay landscape.
  wide: "aspect-16/10",
};

const aspectRatioStyle: Record<ProjectMediaAspect, string | undefined> = {
  video: undefined,
  square: undefined,
  wide: "16 / 10",
};

export function ProjectMedia({
  src,
  alt,
  label,
  aspect = "wide",
  priority = false,
  interactive = true,
  className,
}: ProjectMediaProps) {
  return (
    <div
      className={cn(projectCoverFrame, "relative", aspectClass[aspect], className)}
      style={
        aspectRatioStyle[aspect]
          ? { aspectRatio: aspectRatioStyle[aspect] }
          : undefined
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 34rem, 100vw"
        priority={priority}
        className={cn(
          "object-cover object-top transition-transform duration-300",
          interactive && "group-hover:scale-[1.02]",
        )}
      />
      {label ? (
        <p className="pointer-events-none absolute bottom-3 left-4 z-10 font-mono text-xs text-foreground/85">
          {label}
        </p>
      ) : null}
    </div>
  );
}
