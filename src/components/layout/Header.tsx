import { siteConfig } from "@/content/site.config";
import { InternalLink } from "@/components/ui/Link";

export function Header() {
  return (
    <header className="pb-4">
      <InternalLink href="/" className="group block no-underline">
        <span className="text-base font-semibold text-foreground transition-colors duration-150 group-hover:text-accent">
          {siteConfig.name}
        </span>
        <span className="mt-1 block text-xs text-muted">
          {siteConfig.author.role}
        </span>
      </InternalLink>
    </header>
  );
}
