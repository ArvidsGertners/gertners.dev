// src/components/home/sections/projects/Projects.jsx
import { SectionHeader } from "../../../ui/SectionHeader";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";
import { ArrowIcon } from "../../../ui/ArrowIcon";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../../data/projects";

// Mobile shows this many cards, then an "All N projects" button.
const MOBILE_LIMIT = 2;

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-start gap-section-gap self-stretch px-gutter py-section bg-paper"
    >
      <SectionHeader eyebrow="01 - Projects" title="Things I'm Building" />
      <div className="grid grid-cols-1 gap-8 self-stretch md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            className={i >= MOBILE_LIMIT ? "hidden md:flex" : ""}
            {...p}
          />
        ))}
      </div>
      {projects.length > MOBILE_LIMIT && (
        <ButtonSecondary to="/projects" className="self-stretch md:hidden">
          All {projects.length} projects
          <ArrowIcon />
        </ButtonSecondary>
      )}
    </section>
  );
};
