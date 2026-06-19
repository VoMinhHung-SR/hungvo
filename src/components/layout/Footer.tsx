import { siteConfig } from "@/content/site.config";
import { ExternalLink } from "@/components/ui/ExternalLink";

const footerLinks = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: `mailto:${siteConfig.author.email}` },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-3 border-t border-border pt-6">
      <nav
        aria-label="Footer"
        className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
      >
        {footerLinks.map((link, index) => (
          <span key={link.href} className="inline-flex items-center gap-3">
            {index > 0 ? (
              <span className="text-muted" aria-hidden>
                ·
              </span>
            ) : null}
            <ExternalLink
              href={link.href}
              className="text-muted transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </ExternalLink>
          </span>
        ))}
      </nav>
      <p className="text-sm text-muted">
        © {year} {siteConfig.author.name}
      </p>
    </footer>
  );
}
