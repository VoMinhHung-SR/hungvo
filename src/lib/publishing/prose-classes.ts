import { cn } from "@/lib/cn";

export const proseClasses = cn(
  "prose prose-invert max-w-none",
  "prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight",
  "prose-p:text-muted",
  "prose-strong:text-foreground",
  "prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
  "prose-blockquote:border-l-accent prose-blockquote:text-muted",
  "prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none",
  "prose-pre:bg-transparent prose-pre:p-0",
  "prose-li:text-muted",
  "prose-hr:border-border",
);
