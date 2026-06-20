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
  index,
  activeSection,
  pathname,
}: {
  item: NavItem;
  index: number;
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
        "font-mono text-sm no-underline hover:no-underline transition-colors duration-150",
        isActive ? "text-accent" : "text-muted hover:text-accent",
      )}
    >
      <span className="mr-1 text-accent">{String(index + 1).padStart(2, "0")}.</span>
      {item.label}
    </InternalLink>
  );
}

export function Nav() {
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds);
  const enabledSiteNav = siteConfig.siteNav.filter((item) => item.enabled);
  const navItems = [...siteConfig.homeNav, ...enabledSiteNav];

  return (
    <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {navItems.map((item, index) => (
        <NavLink
          key={item.href}
          item={item}
          index={index}
          activeSection={activeSection}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}
