import { siteConfig } from "@/content/site.config";
import { InternalLink } from "@/components/ui/Link";

export function Header() {
  return (
    <header className="border-b border-surface">
      <InternalLink href="/" className="text-sm font-medium no-underline">
        {siteConfig.name}
      </InternalLink>
    </header>
  );
}
