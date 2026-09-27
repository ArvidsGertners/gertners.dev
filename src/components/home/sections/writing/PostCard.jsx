import { twMerge } from "tailwind-merge";
import { IllustrationSlot } from "../../../ui/IllustrationSlot";
import { TagLabel } from "../../../ui/TagLabel";

export const PostCard = ({
  date,
  title,
  description,
  topics,
  className,
  coverClassName,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-start self-stretch border-[3px] bg-white shadow-brutal-lg",
        className,
      )}
    >
      <IllustrationSlot className={twMerge("h-45", coverClassName)} />
      <div className="flex p-6 flex-col items-start gap-3 self-stretch">
        <p className="text-ink font-mono text-label font-normal uppercase">
          {date}
        </p>
        <h3 className="self-stretch text-ink font-display text-heading-l">
          {title}
        </h3>
        <p className="self-stretch font-body text-body-s text-ink-muted">
          {description}
        </p>
        <div className="flex flex-wrap items-start gap-2">
          {topics.map((topic) => (
            <TagLabel key={topic}>{topic}</TagLabel>
          ))}
        </div>
      </div>
    </div>
  );
};
