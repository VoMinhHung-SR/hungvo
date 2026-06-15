import { siteConfig } from "@/content/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface">
      <p className="text-sm text-muted">
        © {year} {siteConfig.author.name}
      </p>
    </footer>
  );
}
