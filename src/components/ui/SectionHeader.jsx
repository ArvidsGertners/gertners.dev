export const SectionHeader = ({ eyebrow, title, ...props }) => {
  return (
    <div
      className="flex pt-6 flex-col items-start gap-3 self-stretch border-t-[3px] border-ink"
      {...props}
    >
      <p className="text-ink font-mono text-label uppercase">{eyebrow}</p>
      <p className="self-stretch font-display text-display-l">{title}</p>
    </div>
  );
};
