import { HeroItem } from "./HeroItem";
import { PlaceholderBox } from "../../../ui/PlaceholderBox";

export const Hero = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row p-12 lg:p-24 items-center self-stretch gap-16">
      <HeroItem />
      <div className="hover:rotate-1 transition-all ease-in-out">
        <PlaceholderBox />
      </div>
    </div>
  );
};
