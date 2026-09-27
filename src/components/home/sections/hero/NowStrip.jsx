import { TagLabel } from "../../../ui/TagLabel";

const items = [
  "Starting a 3-year dual study programme in October",
  "Focus: Web Dev, Full Stack, IoT",
];

export const NowStrip = () => {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch bg-ink px-gutter py-6 text-body-s text-paper md:flex-row md:items-center md:justify-center md:gap-6 md:text-body-m">
      <TagLabel color="highlight">Now</TagLabel>
      {/* Mobile: "—" bullet list. Desktop: one row with "/" separators. */}
      <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
        {items.map((item, i) => (
          <li key={item}>
            <span className="md:hidden" aria-hidden="true">
              —{" "}
            </span>
            {i > 0 && (
              <span className="hidden pr-6 md:inline" aria-hidden="true">
                /
              </span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
