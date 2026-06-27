import { PostCard } from "@/components/publishing/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PostCollection, PostMeta } from "@/types/content";

interface CollectionIndexPageProps {
  title: string;
  description: string;
  posts: readonly PostMeta[];
  collection: PostCollection;
  emptyMessage: string;
}

export function CollectionIndexPage({
  title,
  description,
  posts,
  collection,
  emptyMessage,
}: CollectionIndexPageProps) {
  return (
    <div className="flex max-w-reading flex-col gap-10">
      <header className="flex flex-col gap-4">
        <SectionHeading as="h1" size="default" className="mb-0">
          {title}
        </SectionHeading>
        <p className="text-lg text-muted">{description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">{emptyMessage}</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
}
