import type { CaseStudy } from "@/types/content";

const slug = "oupharmacy-store" as const;
const imageBase = `/images/projects/${slug}`;

export const oupharmacyStore: CaseStudy = {
  slug,
  title: "OUPharmacy Store",
  description:
    "Next.js pharmacy storefront with product catalog, cart flows, and theme-driven UI — the customer-facing frontend for the OuPharmacy platform.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Frontend Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "OuPharmacy store showing product catalog and cart checkout flow",
  seo: {
    publishedAt: "2025-08-10",
    updatedAt: "2026-06-01",
    ogImage: `${imageBase}/hero.png`,
    keywords: ["pharmacy", "Next.js", "e-commerce", "TypeScript", "storefront"],
  },
  repoUrl: "https://github.com/VoMinhHung-SR/oupharmacy-store",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Customer-facing pharmacy store built with Next.js — product browsing, cart flows, and a theme system tuned for the OuPharmacy brand.",
        "Pairs with the clinic backend APIs for inventory and order workflows across the platform.",
      ],
    },
    {
      id: "stack",
      type: "bullets",
      title: "Tech highlights",
      items: [
        "Next.js + TypeScript with Tailwind CSS",
        "Theme configuration and reusable UI patterns",
        "Storefront flows integrated with pharmacy backend services",
      ],
    },
  ],
};
