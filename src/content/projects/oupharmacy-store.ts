import type { CaseStudy } from "@/types/content";

const slug = "oupharmacy-store" as const;
const imageBase = `/images/projects/${slug}`;

export const oupharmacyStore: CaseStudy = {
  slug,
  title: "OUPharmacy Store",
  description:
    "Customer storefront for OUPharmacy—browse and checkout, then manage a home medicine cabinet, dose reminders, and 24/7 pharmacist consult on the same catalog staff maintain.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "TanStack Query"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Frontend Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "OUPharmacy Store homepage with smart medicine cabinet",
  seo: {
    publishedAt: "2025-08-10",
    updatedAt: "2026-10-13",
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
        "Public shop for the OUPharmacy family: find medicines, check out without calling the clinic, then keep a household record after the order.",
        "Same catalog as Pharmacy Management—not a second inventory. The storefront talks to store + clinic REST APIs; staff keep owning stock and pricing in the admin app.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Key features",
      items: [
        "Home merchandising: hero campaigns, consult tiles, flash / hot sale",
        "Catalog search, categories, cart, and guest checkout",
        "Smart medicine cabinet: stock, expiry tracking, dose schedule",
        "In-app pharmacist consult and appointment / branch lookup",
        "EN / VI via next-intl",
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
