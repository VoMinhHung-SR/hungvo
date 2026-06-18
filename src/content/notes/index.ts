import type { PostEntry } from "@/types/content";
import { validatePosts } from "@/lib/content/validate-posts";

import ReactServerComponents, {
  meta as reactServerComponentsMeta,
} from "./react-server-components.mdx";

const notes = [
  { ...reactServerComponentsMeta, Content: ReactServerComponents },
] as const satisfies readonly PostEntry[];

validatePosts("notes", notes);

export const allNotes = [...notes]
  .filter((note) => !note.draft)
  .sort((a, b) => b.seo.publishedAt.localeCompare(a.seo.publishedAt));

export function getNoteBySlug(slug: string) {
  return allNotes.find((note) => note.slug === slug);
}

export function getAllNoteSlugs() {
  return allNotes.map((note) => note.slug);
}
