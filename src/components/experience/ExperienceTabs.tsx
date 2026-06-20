"use client";

import { useState } from "react";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowList } from "@/components/ui/ArrowList";
import { cn } from "@/lib/cn";
import type { ExperienceEntry } from "@/types/content";

interface ExperienceTabsProps {
  items: readonly ExperienceEntry[];
}

export function ExperienceTabs({ items }: ExperienceTabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-4">
      <div
        role="tablist"
        aria-label="Work experience"
        className="flex gap-1 overflow-x-auto md:flex-col md:overflow-visible"
      >
        {items.map((item) => {
          const isActive = item.id === active.id;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "shrink-0 border-l-2 px-4 py-2 text-left font-mono text-sm transition-colors duration-150",
                isActive
                  ? "border-accent bg-accent/5 text-accent"
                  : "border-border text-muted hover:border-muted hover:text-foreground",
              )}
            >
              {item.company}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="min-w-0 flex-1 py-1"
      >
        <h3 className="text-xl font-semibold text-foreground">
          {active.role}{" "}
          <span className="text-muted">
            @{" "}
            {active.url ? (
              <ExternalLink href={active.url} className="text-accent">
                {active.company}
              </ExternalLink>
            ) : (
              <span>{active.company}</span>
            )}
          </span>
        </h3>
        <p className="mt-1 font-mono text-xs text-muted">{active.range}</p>
        <ArrowList items={active.bullets} className="mt-6 sm:grid-cols-1" />
      </div>
    </div>
  );
}
