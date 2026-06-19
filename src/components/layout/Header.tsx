import { siteConfig } from "@/content/site.config";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/ui/Button";
import { InternalLink } from "@/components/ui/Link";

export function Header() {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <header className="flex w-full items-center justify-between gap-4 px-6 py-4 lg:px-12 xl:px-16">
        <InternalLink
          href="/"
          className="group shrink-0 no-underline hover:no-underline"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="text-base font-semibold text-foreground transition-colors duration-150 group-hover:text-accent">
            {siteConfig.name}
          </span>
        </InternalLink>
        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          <Nav />
          {siteConfig.resumeUrl ? (
            <Button
              href={siteConfig.resumeUrl}
              variant="outline"
              className="px-4 py-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          ) : null}
        </div>
      </header>
    </div>
  );
}
