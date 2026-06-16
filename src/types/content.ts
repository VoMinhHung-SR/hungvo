export type NavItemKind = "anchor" | "route";

export interface NavItem {
  label: string;
  href: string;
  kind: NavItemKind;
  sectionId?: string;
  enabled?: boolean;
}

export interface SiteAuthor {
  name: string;
  role: string;
  email: string;
}

export interface SiteSocial {
  github: string;
  linkedin: string;
}

export interface SiteGithub {
  username: string;
  contributionsApi: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: SiteAuthor;
  social: SiteSocial;
  github: SiteGithub;
  keywords: string[];
  homeNav: NavItem[];
  siteNav: NavItem[];
}

export interface ProjectCard {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  featured: boolean;
}

export interface CaseStudySeo {
  publishedAt: string;
  updatedAt: string;
  ogImage: string;
  keywords: string[];
  title?: string;
  description?: string;
}

export interface SectionBase {
  id: string;
  title: string;
  eyebrow?: string;
}

export interface TextSection extends SectionBase {
  type: "text";
  paragraphs: string[];
}

export interface BulletSection extends SectionBase {
  type: "bullets";
  items: string[];
}

export interface MetricsSection extends SectionBase {
  type: "metrics";
  items: { label: string; value: string; note?: string }[];
}

export interface GallerySection extends SectionBase {
  type: "gallery";
  images: { src: string; alt: string; width: number; height: number }[];
}

export type CaseStudySection =
  | TextSection
  | BulletSection
  | MetricsSection
  | GallerySection;

export interface CaseStudy extends ProjectCard {
  role: string;
  timeline: string;
  heroImage: string;
  heroImageAlt: string;
  seo: CaseStudySeo;
  sections: CaseStudySection[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ContentItemBase {
  slug: string;
  title: string;
  description: string;
}
