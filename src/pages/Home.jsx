import { Hero } from "../components/home/sections/hero/Hero";
import { NowStrip } from "../components/home/sections/hero/NowStrip";
import { Projects } from "../components/home/sections/projects/Projects";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ProjectCard } from "../components/home/sections/projects/ProjectCard";
import { TagLabel } from "../components/ui/TagLabel";

export const Home = () => {
  return (
    <>
      <div className="flex min-h-[calc(100dvh-var(--spacing-nav))] flex-col">
        <Hero></Hero>
        <NowStrip />
      </div>
      <Projects />
    </>
  );
};
