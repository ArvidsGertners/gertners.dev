// src/components/home/sections/projects/Projects.jsx
import { SectionHeader } from "../../../ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-start gap-12 self-stretch p-24"
    >
      <SectionHeader eyebrow="01 - Projects" title="Things I'm Building" />
      <div className="grid grid-cols-1 gap-8 self-stretch lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};
