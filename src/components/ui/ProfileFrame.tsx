"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";

interface ProfileFrameProps {
  alt: string;
  src?: string;
  initials?: string;
  className?: string;
}

export function ProfileFrame({
  alt,
  src,
  initials = "HV",
  className,
}: ProfileFrameProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(src) && !imageError;

  return (
    <div className={cn("relative mx-auto w-full max-w-xs lg:mx-0", className)}>
      <div className="relative z-10 aspect-square overflow-hidden rounded-[var(--radius-image)] bg-surface">
        {showImage ? (
          <Image
            src={src!}
            alt={alt}
            width={320}
            height={320}
            className="h-full w-full object-cover grayscale transition-[filter] duration-300 hover:grayscale-0"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-5xl font-semibold tracking-tight text-muted/80"
            role="img"
            aria-label={alt}
          >
            {initials}
          </div>
        )}
      </div>
      <div
        className="absolute top-4 left-4 -z-0 h-full w-full rounded-[var(--radius-image)] border-2 border-accent"
        aria-hidden
      />
    </div>
  );
}
