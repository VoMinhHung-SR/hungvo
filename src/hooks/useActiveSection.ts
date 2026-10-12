"use client";

import { useEffect, useState } from "react";

import { getScrollOffsetPx, getSectionScrollMarker } from "@/lib/nav-scroll";

/** How far past the scroll offset a section marker must pass to become active. */
const ACTIVE_BAND_PX = 8;
/** Only jump to the last section when truly near document end. */
const BOTTOM_THRESHOLD_PX = 48;

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    let frame = 0;

    const resolveSections = () =>
      sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, element } : null;
        })
        .filter(
          (section): section is { id: string; element: HTMLElement } =>
            section !== null,
        );

    const updateActiveSection = () => {
      const sections = resolveSections();
      if (sections.length === 0) {
        setActiveSection(null);
        return;
      }

      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      const focusLine = getScrollOffsetPx() + ACTIVE_BAND_PX;

      if (pageBottom - viewportBottom <= BOTTOM_THRESHOLD_PX) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // Pick the last section whose title has crossed the sticky-nav focus line.
      let current: string | null = null;
      for (const { id, element } of sections) {
        const marker = getSectionScrollMarker(element);
        if (marker.getBoundingClientRect().top <= focusLine) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
