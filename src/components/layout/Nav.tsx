import { siteConfig } from "@/content/site.config";
import { InternalLink } from "@/components/ui/ExternalLink";
import { cn } from "@/lib/cn";

function NavList({
  items,
  className,
}: {
  items: typeof siteConfig.homeNav;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <InternalLink href={item.href} className="text-sm text-muted">
            {item.label}
          </InternalLink>
        </li>
      ))}
    </ul>
  );
}

export function Nav() {
  const enabledSiteNav = siteConfig.siteNav.filter((item) => item.enabled);

  return (
    <nav aria-label="Primary">
      <NavList items={siteConfig.homeNav} className="hidden lg:flex" />
      <NavList
        items={enabledSiteNav}
        className="mt-4 hidden border-t border-surface pt-4 lg:flex"
      />
      <NavList items={siteConfig.homeNav} className="flex lg:hidden" />
    </nav>
  );
}
