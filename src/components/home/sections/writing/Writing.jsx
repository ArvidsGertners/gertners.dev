import { SectionHeader } from "../../../ui/SectionHeader";
import { PostCard } from "./PostCard";
import { posts } from "../../../../data/posts";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";

export const Writing = () => {
  return (
    <section
      id="writing"
      className="flex flex-col items-start gap-12 self-stretch p-6 md:p-12 lg:p-24"
    >
      <SectionHeader eyebrow="02 - Writing" title="Notes from the bench" />

      <div className="grid grid-cols-1 gap-6 self-stretch md:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 self-stretch sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-ink-muted text-label">
          {posts.length} {posts.length === 1 ? "post" : "posts"} so far - New
          ones roughly twice a month
        </p>
        <ButtonSecondary>All Posts</ButtonSecondary>
      </div>
    </section>
  );
};
