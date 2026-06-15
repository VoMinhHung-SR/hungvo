export type ProjectSlug = "interview-frogde" | "pharmacy-management";

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
  slug: ProjectSlug;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  featured: boolean;
}

export interface CaseStudy extends ProjectCard {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ContentItemBase {
  slug: string;
  title: string;
  description: string;
}
