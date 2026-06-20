import { siteConfig } from "@/content/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-center">
      <p className="font-mono text-xs text-muted">
        Designed &amp; Built by {siteConfig.author.name} · © {year}
      </p>
    </footer>
  );
}
