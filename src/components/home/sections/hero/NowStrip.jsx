import { TagLabel } from "../../../ui/TagLabel";

export const NowStrip = () => {
  return (
    <div className="flex px-24 py-6 justify-center items-center gap-6 self-stretch bg-ink text-paper">
      <TagLabel color="highlight">Now</TagLabel>
      <p>Starting a 3-year dual study programme in October</p>
      <p>/</p>
      <p>Focus: Web Dev, Full Stack, IoT</p>
    </div>
  );
};
