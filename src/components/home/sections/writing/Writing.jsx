import { SectionHeader } from "../../../ui/SectionHeader";
import { PostCard } from "./PostCard";
import { posts } from "../../../../data/posts";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";

export const Writing = () => {
  return (
    <>
      <div className="flex p-24 flex-col items-start gap-12 self-stretch">
        <SectionHeader
          eyebrow={"02 - Writing"}
          title={"Notes from the bench"}
        />
        <div className="flex items-start gap-6 self-stretch">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="font-mono text-ink-muted text-label font-normal">
            {posts.length} posts so far - New ones roughly twice a month
          </p>
          <ButtonSecondary>All Posts</ButtonSecondary>
        </div>
      </div>
    </>
  );
};
