import { cn } from "@/lib/cn";

export const proseClasses = cn(
  "prose prose-invert max-w-none",
  "prose-headings:scroll-mt-24 prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight",
  "prose-h2:mt-10 prose-h2:mb-4",
  "prose-h3:mt-8 prose-h3:mb-3",
  "prose-p:text-muted prose-p:leading-relaxed",
  "prose-strong:text-foreground",
  "prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
  "prose-blockquote:border-l-accent prose-blockquote:text-muted",
  "prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none",
  "prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-6",
  "prose-li:text-muted",
  "prose-hr:border-border prose-hr:my-10",
);
