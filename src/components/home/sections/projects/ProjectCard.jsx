import { IllustrationSlot } from "./IllustrationSlot";
import { TagLabel } from "../../../ui/TagLabel";

const STATUS_COLORS = {
  "in progress": "highlight",
  // shipped: "...", paused: "...",
};

export const ProjectCard = ({ title, status, description, stack, links }) => {
  return (
    <article className="flex flex-col items-start border-[3px] bg-white shadow-brutal-lg">
      <IllustrationSlot />
      <div className="flex flex-col items-start gap-4 self-stretch p-8">
        <div className="flex items-center justify-between self-stretch">
          <h3 className="text-ink font-display text-heading-xl">{title}</h3>
          <TagLabel color={STATUS_COLORS[status]}>{status}</TagLabel>
        </div>
        <p className="self-stretch text-ink font-body text-body-m">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 self-stretch">
          {stack.map((tech) => (
            <TagLabel key={tech}>{tech}</TagLabel>
          ))}
        </div>
        <div className="flex gap-6 text-ink font-mono text-label uppercase underline">
          {links.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};
