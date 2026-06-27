"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { TechPills } from "@/components/projects/TechPills";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { homeContent } from "@/content/home";
import { handleHomeSectionLinkClick } from "@/lib/nav-scroll";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function HeroCopy({
  animated,
  onSectionCtaClick,
}: {
  animated: boolean;
  onSectionCtaClick: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { eyebrow, name, tagline, description, highlights, cta, secondaryCta } =
    homeContent.hero;

  const Eyebrow = animated ? motion.p : "p";
  const Name = animated ? motion.h1 : "h1";
  const Tagline = animated ? motion.p : "p";
  const Description = animated ? motion.p : "p";
  const Highlights = animated ? motion.div : "div";
  const Actions = animated ? motion.div : "div";

  const motionProps = animated ? { variants: item } : {};

  return (
    <>
      <Eyebrow
        {...motionProps}
        className="mb-5 font-mono text-xs tracking-[0.14em] text-accent uppercase"
      >
        {eyebrow}
      </Eyebrow>

      <Name
        {...motionProps}
        className="text-hero font-bold tracking-tight text-foreground"
      >
        {name}
      </Name>

      {animated ? (
        <motion.span
          className="mt-4 block h-px w-full max-w-xs origin-left bg-linear-to-r from-accent/80 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden
        />
      ) : (
        <span
          className="mt-4 block h-px w-full max-w-xs bg-linear-to-r from-accent/80 to-transparent"
          aria-hidden
        />
      )}

      <Tagline
        {...motionProps}
        className="mt-6 max-w-2xl text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
      >
        {tagline.lead}
        <span className="text-accent">{tagline.emphasis}</span>
      </Tagline>

      <Description
        {...motionProps}
        className="mt-5 max-w-xl text-pretty leading-relaxed text-muted"
      >
        {description}
      </Description>

      <Highlights {...motionProps} className="mt-8">
        <TechPills items={highlights} />
      </Highlights>

      <Actions
        {...motionProps}
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 pb-1"
      >
        <Button href={cta.href} onClick={onSectionCtaClick}>
          {cta.label}
        </Button>
        <ExternalLink
          href={secondaryCta.href}
          className="font-mono text-sm text-muted no-underline transition-colors hover:text-accent hover:no-underline"
        >
          {secondaryCta.label} →
        </ExternalLink>
      </Actions>
    </>
  );
}

export function HeroContent() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  const onSectionCtaClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleHomeSectionLinkClick(event, homeContent.hero.cta.href, pathname);
  };

  if (reduceMotion) {
    return (
      <div className="relative z-10 max-w-3xl">
        <HeroCopy animated={false} onSectionCtaClick={onSectionCtaClick} />
      </div>
    );
  }

  return (
    <motion.div
      className="relative z-10 max-w-3xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <HeroCopy animated onSectionCtaClick={onSectionCtaClick} />
    </motion.div>
  );
}
