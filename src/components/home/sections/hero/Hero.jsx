import { HeroItem } from "./HeroItem";
import { PlaceholderBox } from "../../../ui/PlaceholderBox";

export const Hero = () => {
  return (
    <div className="flex flex-1 flex-col items-stretch gap-6 self-stretch px-gutter py-hero md:flex-row md:items-center md:gap-16">
      <HeroItem />
      {/* Illustration comes first on mobile. Flexible width so the two columns
          still fit just above the 900px breakpoint. */}
      <div className="order-first transition-all ease-in-out hover:rotate-1 md:order-none md:w-2/5 md:max-w-130 md:shrink-0">
        <PlaceholderBox />
      </div>
    </div>
  );
};
