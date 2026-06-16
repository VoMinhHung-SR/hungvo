import { siteConfig } from "@/content/site.config";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image: string;
  keywords: string[];
  about?: string[];
}) {
  const imageUrl = new URL(options.image, siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: new URL(options.path, siteConfig.url).toString(),
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    image: [imageUrl],
    keywords: options.keywords.join(", "),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    ...(options.about?.length
      ? {
          about: options.about.map((name) => ({
            "@type": "Thing",
            name,
          })),
        }
      : {}),
  };
}

export function buildStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [personSchema(), websiteSchema()],
  };
}
