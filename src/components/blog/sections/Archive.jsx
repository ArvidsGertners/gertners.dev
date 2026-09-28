import { posts } from "../../../data/posts";
import { TagLabel } from "../../ui/TagLabel";
import { ArrowIcon } from "../../ui/ArrowIcon";

export const Archive = () => {
  const byYear = Object.groupBy(posts, (post) => post.date.slice(0, 4));

  return (
    <div className="flex pt-0 px-24 pb-24 flex-col items-start gap-16 self-stretch">
      {Object.entries(byYear)
        .reverse()
        .map(([year, yearPosts]) => (
          <div className="flex flex-col items-start self-stretch" key={year}>
            <div className="flex pb-4 justify-between items-end self-stretch border-b-3">
              <p className="text-ink font-display text-heading-xl">{year}</p>
              <p className="text-ink-muted font-mono text-label font-normal">
                {yearPosts.length} posts
              </p>
            </div>
            {yearPosts.map((post) => (
              <div
                className="flex py-6 px-0 items-center gap-8 self-stretch border-b-3"
                key={post.id}
              >
                <p className="w-35">{post.date}</p>
                <div className="flex flex-col items-start gap-1 grow shrink-0 basis-0">
                  <p className="self-stretch font-display text-heading-l">
                    {post.title}
                  </p>
                  <p className="self-stretch text-ink-muted font-body text-body-s">
                    {" "}
                    {post.description}{" "}
                  </p>
                </div>
                <TagLabel>{post.topics[0]}</TagLabel>
                <ArrowIcon />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
