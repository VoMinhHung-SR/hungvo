import type { CaseStudy } from "@/types/content";

const slug = "oupharmacy-store" as const;
const imageBase = `/images/projects/${slug}`;

export const oupharmacyStore: CaseStudy = {
  slug,
  title: "OUPharmacy Store",
  description:
    "Customer storefront for OUPharmacy—catalog and checkout first, then home cabinet, dose reminders, and in-app consult. Shares the clinic APIs so staff catalog is what shoppers see.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "TanStack Query"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Frontend Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "OUPharmacy Store catalog and account care",
  seo: {
    publishedAt: "2025-08-10",
    updatedAt: "2026-10-09",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "pharmacy storefront",
      "Next.js",
      "e-commerce",
      "TypeScript",
      "OUPharmacy",
      "smart medicine cabinet",
    ],
  },
  repoUrl: "https://github.com/VoMinhHung-SR/oupharmacy-store",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Public shop for the OUPharmacy family: find medicines, check out without calling the clinic, keep a home record after the order.",
        "Same product family as the staff dashboard (Pharmacy Management), not a second catalog. Storefront talks to store + main REST APIs; admin stays on the clinic app.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Key features",
      items: [
        "Faceted search, categories, and home merchandising (hero, flash / hot sale)",
        "Cart, guest checkout, and order history",
        "Smart medicine cabinet: household stock, expiry alerts, dose schedule",
        "Consult hub (pharmacist, doctor booking, medicine suggest) and EN/VI",
      ],
    },
    {
      id: "outcomes",
      type: "metrics",
      title: "At a glance",
      items: [
        { label: "Status", value: "No public demo" },
        { label: "Languages", value: "EN / VI" },
        { label: "Ecosystem", value: "OUPharmacy" },
      ],
    },
  ],
};
