"use client";

import { motion, useReducedMotion } from "framer-motion";

import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";

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

export function HeroContent() {
  const { greeting, name, tagline, description, cta } = homeContent.hero;
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-mono text-sm text-accent">{greeting}</p>
        <h1 className="text-hero font-bold tracking-tight text-foreground">
          {name}
          <span className="mt-3 block h-1 w-16 rounded-full bg-accent" aria-hidden />
        </h1>
        <p className="text-tagline mt-4 font-semibold tracking-tight text-muted">
          {tagline}
        </p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{description}</p>
        <div className="mt-12">
          <Button href={cta.href}>{cta.label}</Button>
        </div>
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
      <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
        {greeting}
      </motion.p>
      <motion.h1
        variants={item}
        className="text-hero font-bold tracking-tight text-foreground"
      >
        {name}
      </motion.h1>
      <motion.span
        className="mt-3 block h-1 w-16 origin-left rounded-full bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        aria-hidden
      />
      <motion.p
        variants={item}
        className="text-tagline mt-4 font-semibold tracking-tight text-muted"
      >
        {tagline}
      </motion.p>
      <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted">
        {description}
      </motion.p>
      <motion.div variants={item} className="mt-12">
        <Button href={cta.href}>{cta.label}</Button>
      </motion.div>
    </motion.div>
  );
}
