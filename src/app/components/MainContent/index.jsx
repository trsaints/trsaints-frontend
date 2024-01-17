import { useState } from "react";
import { projectService, skillService } from "../../services/db-service";
import Hero from "./Hero/Hero";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";

function Root({ children }) {
  return <main className="main">{children}</main>;
}

function HeroSection() {
  return <Hero />;
}

function SkillsSection() {
  const [skills, setSkills] = useState(["skill issue"]);

  const loadSkills = () => setSkills(skillService.getAllSkills());

  return (
    <Skills.Root>
      <Skills.Header onHandleClick={loadSkills} />
      <Skills.SkillsList skills={skills} />
      <Skills.SkillModal skill={skills[0]} />
    </Skills.Root>
  );
}

function ProjectsSection() {
  const [projects, setProjects] = useState(["hi"]);

  const loadProjects = () => setProjects(projectService.getAllProjects());

  return (
    <Projects.Root>
      <Projects.Header onHandleClick={loadProjects} />
      <Projects.Filter />
      <Projects.ProjectsList projects={projects} />
    </Projects.Root>
  );
}

export const MainContent = { Root, HeroSection, SkillsSection, ProjectsSection };
