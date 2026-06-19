import { siteConfig } from "@/content/site.config";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { ExternalLink } from "@/components/ui/ExternalLink";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    Icon: LinkedInIcon,
  },
] as const;

export function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-6 lg:flex xl:left-8"
    >
      <ul className="flex flex-col gap-5">
        {socialLinks.map(({ label, href, Icon }) => (
          <li key={href}>
            <ExternalLink
              href={href}
              aria-label={label}
              className="text-muted transition-colors duration-150 hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </ExternalLink>
          </li>
        ))}
      </ul>
      <span className="h-24 w-px bg-border" aria-hidden />
    </aside>
  );
}
