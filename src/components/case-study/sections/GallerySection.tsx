import Image from "next/image";

import type { GallerySection as GallerySectionData } from "@/types/content";

interface GallerySectionProps {
  section: GallerySectionData;
}

export function GallerySection({ section }: GallerySectionProps) {
  return (
    <section id={section.id} className="flex flex-col gap-4">
      {section.eyebrow ? (
        <p className="font-mono text-xs text-accent">{section.eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
      <div className="flex flex-col gap-6">
        {section.images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-lg border border-border bg-surface"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
