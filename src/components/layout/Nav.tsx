import { siteConfig } from "@/content/site.config";
import { InternalLink } from "@/components/ui/Link";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

function NavLink({ item }: { item: NavItem }) {
  const isRoute = item.kind === "route";

  return (
    <InternalLink
      href={item.href}
      className={cn("text-sm", isRoute ? "text-foreground" : "text-muted")}
    >
      {item.label}
    </InternalLink>
  );
}

function NavList({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <NavLink item={item} />
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
      {enabledSiteNav.length > 0 && (
        <NavList
          items={enabledSiteNav}
          className="mt-4 hidden border-t border-surface pt-4 lg:flex"
        />
      )}
      <NavList items={siteConfig.homeNav} className="flex lg:hidden" />
    </nav>
  );
}
