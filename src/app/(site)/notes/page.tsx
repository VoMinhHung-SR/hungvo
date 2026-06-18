import type { Metadata } from "next";

import { CollectionIndexPage } from "@/components/publishing/CollectionIndexPage";
import { allNotes } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Notes",
  description:
    "Short technical notes on React, Next.js, and patterns I reach for in day-to-day frontend work.",
  path: "/notes",
});

export default function NotesPage() {
  return (
    <CollectionIndexPage
      title="Notes"
      description="Compact technical notes — patterns, mental models, and quick references."
      posts={allNotes}
      collection="notes"
      emptyMessage="No notes published yet."
    />
  );
}
