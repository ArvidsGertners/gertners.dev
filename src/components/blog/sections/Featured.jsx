import { IllustrationSlot } from "../../ui/IllustrationSlot";
import { posts } from "../../../data/posts";
import { TagLabel } from "../../ui/TagLabel";
import { ButtonPrimary } from "../../ui/ButtonPrimary";
import { ArrowIcon } from "../../ui/ArrowIcon";

const featuredPost = posts.find((post) => post.id == 1);

export const Featured = () => {
  return (
    <div className="flex px-24 pt-0 pb-16 flex-col items-start self-stretch">
      <div className="flex items-start self-stretch border-[3px] bg-white shadow-brutal-lg">
        <IllustrationSlot className="w-152 h-100 border-r-3 border-b-0" />
        <div className="flex p-12 flex-col content-center items-start gap-4 grow shrink-0 basis-0 self-stretch">
          <div className="flex items-start gap-2">
            {featuredPost.topics.map((topic) => (
              <TagLabel key={topic}>{topic}</TagLabel>
            ))}
          </div>
          <p className="font-mono text-ink-muted text-label font-normal">
            {featuredPost.date}
          </p>
          <p className="self-stretch text-ink font-display text-heading-xl font-bold">
            {featuredPost.title}
          </p>
          <p className="self-stretch font-body text-body-l font-normal">
            {featuredPost.description}
          </p>
          <ButtonPrimary>
            Read Post <ArrowIcon />
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};
