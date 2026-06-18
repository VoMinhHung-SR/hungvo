"use client";

import { usePathname } from "next/navigation";

import { siteConfig } from "@/content/site.config";
import { InternalLink } from "@/components/ui/Link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

const sectionIds = siteConfig.homeNav
  .map((item) => item.sectionId)
  .filter((id): id is string => id !== undefined);

function NavLink({
  item,
  activeSection,
  pathname,
}: {
  item: NavItem;
  activeSection: string | null;
  pathname: string;
}) {
  const isActive =
    item.kind === "route"
      ? pathname === item.href || pathname.startsWith(`${item.href}/`)
      : item.sectionId !== undefined && activeSection === item.sectionId;

  return (
    <InternalLink
      href={item.href}
      className={cn(
        "group flex items-center gap-3 text-sm transition-colors",
        isActive ? "text-accent" : "text-muted",
      )}
    >
      <span
        className={cn(
          "h-px w-8 bg-muted transition-all",
          isActive && "w-12 bg-accent",
        )}
        aria-hidden
      />
      {item.label}
    </InternalLink>
  );
}

function NavList({
  items,
  activeSection,
  pathname,
  className,
}: {
  items: NavItem[];
  activeSection: string | null;
  pathname: string;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <NavLink
            item={item}
            activeSection={activeSection}
            pathname={pathname}
          />
        </li>
      ))}
    </ul>
  );
}

export function Nav() {
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds);
  const enabledSiteNav = siteConfig.siteNav.filter((item) => item.enabled);

  return (
    <nav aria-label="Primary">
      <NavList
        items={siteConfig.homeNav}
        activeSection={activeSection}
        pathname={pathname}
        className="hidden lg:flex"
      />
      {enabledSiteNav.length > 0 && (
        <NavList
          items={enabledSiteNav}
          activeSection={activeSection}
          pathname={pathname}
          className="mt-4 hidden border-t border-border pt-4 lg:flex"
        />
      )}
      <NavList
        items={siteConfig.homeNav}
        activeSection={activeSection}
        pathname={pathname}
        className="flex lg:hidden"
      />
      {enabledSiteNav.length > 0 && (
        <NavList
          items={enabledSiteNav}
          activeSection={activeSection}
          pathname={pathname}
          className="mt-4 flex border-t border-border pt-4 lg:hidden"
        />
      )}
    </nav>
  );
}
