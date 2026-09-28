import { IllustrationSlot } from "../../ui/IllustrationSlot";

export const Header = () => {
  return (
    <div className="flex p-24 items-end gap-16 self-stretch">
      <div className="flex flex-col items-start gap-6 grow shrink-0 basis-0">
        <p className="text-ink-muted font-mono text-label font-normal ">
          gertners.dev / blog
        </p>
        <p className="self-stretch text-ink text-display-xl font-display font-bold">
          Writing
        </p>
        <p className="self-stretch font-body text-body-l font-normal text-ink-muted">
          Build logs, study notes and the things I got wrong first. New posts
          roughly twice a month.
        </p>
        <div className="flex items-center gap-6">
          <p className="text-ink-muted font-mono text-label font-normal">
            7 posts · since 2025
          </p>
        </div>
      </div>
      <IllustrationSlot className="h-65 w-100 border-[3px] shadow-brutal-lg rotate-2" />
    </div>
  );
};
