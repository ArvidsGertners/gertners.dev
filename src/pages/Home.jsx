import { Hero } from "../components/home/Hero";
import { NowStrip } from "../components/home/NowStrip";

export const Home = () => {
  return (
    <div className="flex min-h-[calc(100dvh-var(--spacing-nav))] flex-col">
      <Hero></Hero>
      <NowStrip />
    </div>
  );
};
