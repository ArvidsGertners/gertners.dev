import { SectionHeader } from "../../../ui/SectionHeader";
import { PostCard } from "./PostCard";
import { posts } from "../../../../data/posts";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";
import { ArrowIcon } from "../../../ui/ArrowIcon";

export const Writing = () => {
  return (
    <section
      id="writing"
      className="flex flex-col items-start gap-section-gap self-stretch px-gutter py-section"
    >
      <SectionHeader eyebrow="02 - Writing" title="Notes from the bench" />

      {/* Mobile: 2 posts, the second without a cover. Desktop: 3 posts. */}
      <div className="grid grid-cols-1 gap-8 self-stretch md:grid-cols-3 md:gap-6">
        {posts.slice(0, 3).map((post, i) => (
          <PostCard
            key={post.id}
            className={i === 2 ? "hidden md:flex" : ""}
            coverClassName={i === 1 ? "hidden md:block" : ""}
            {...post}
          />
        ))}
      </div>

      <div className="flex flex-col items-stretch gap-4 self-stretch md:flex-row md:items-center md:justify-between">
        <p className="hidden font-mono text-ink-muted text-label md:block">
          {posts.length} {posts.length === 1 ? "post" : "posts"} so far - New
          ones roughly twice a month
        </p>
        <ButtonSecondary>
          All Posts
          <ArrowIcon />
        </ButtonSecondary>
      </div>
    </section>
  );
};
