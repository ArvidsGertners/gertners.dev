import { Hero } from "../components/home/sections/hero/Hero";
import { NowStrip } from "../components/home/sections/hero/NowStrip";
import { Projects } from "../components/home/sections/projects/Projects";
import { Writing } from "../components/home/sections/writing/Writing";
import { About } from "../components/home/sections/about/About";
import { Contact } from "../components/home/sections/contact/Contact";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col md:min-h-[calc(100dvh-var(--spacing-nav))]">
        <Hero></Hero>
        <NowStrip />
      </div>
      <Projects />
      <Writing />
      <About />
      <Contact />
    </>
  );
};
