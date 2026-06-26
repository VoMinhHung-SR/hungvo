function parseLengthPx(raw: string, rootFontSize: number): number {
  if (raw.endsWith("rem")) {
    return parseFloat(raw) * rootFontSize;
  }

  if (raw.endsWith("px")) {
    return parseFloat(raw);
  }

  return 0;
}

export function getNavOffsetPx(): number {
  const root = document.documentElement;
  const styles = getComputedStyle(root);
  const rootFontSize = parseFloat(styles.fontSize) || 16;
  const raw = styles.getPropertyValue("--spacing-nav-offset").trim();

  return parseLengthPx(raw, rootFontSize) || 88;
}

export function getScrollOffsetPx(): number {
  const root = document.documentElement;
  const styles = getComputedStyle(root);
  const rootFontSize = parseFloat(styles.fontSize) || 16;
  const gap = styles.getPropertyValue("--spacing-scroll-gap").trim();

  return getNavOffsetPx() + (parseLengthPx(gap, rootFontSize) || 24);
}

export function getSectionScrollMarker(section: HTMLElement): HTMLElement {
  return section.querySelector("h2") ?? section;
}

export function scrollToNavSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  const target = getSectionScrollMarker(section);
  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffsetPx();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.replaceState(null, "", `/#${sectionId}`);
}
