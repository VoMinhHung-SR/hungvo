"use client";

import { useEffect, useState } from "react";

const SCROLL_OFFSET = 100;
const BOTTOM_THRESHOLD = 80;

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        return element ? { id, element } : null;
      })
      .filter(
        (section): section is { id: string; element: HTMLElement } =>
          section !== null,
      );

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;

      if (pageBottom - viewportBottom < BOTTOM_THRESHOLD) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      let current: string | null = null;
      for (const { id, element } of sections) {
        const top = element.getBoundingClientRect().top + scrollY;
        if (top - SCROLL_OFFSET <= scrollY) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
