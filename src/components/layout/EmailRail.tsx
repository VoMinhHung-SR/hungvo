import { siteConfig } from "@/content/site.config";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function EmailRail() {
  const email = siteConfig.author.email;

  return (
    <aside
      aria-label="Email"
      className="fixed right-6 bottom-0 z-30 hidden flex-col items-center gap-6 lg:flex xl:right-8"
    >
      <ExternalLink
        href={`mailto:${email}`}
        className="font-mono text-xs tracking-widest text-muted [writing-mode:vertical-rl] transition-colors duration-150 hover:text-accent"
      >
        {email}
      </ExternalLink>
      <span className="h-24 w-px bg-border" aria-hidden />
    </aside>
  );
}
