import { useState } from "react";
import {
  projectService,
  skillService,
  socialMediaService,
} from "../../services/db-service";
import { About } from "./About/About";
import Hero from "./Hero/Hero";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";

function Root({ children }) {
  return <main className="main">{children}</main>;
}

function HeroSection() {
  return <Hero />;
}

function AboutSection() {
  const links = socialMediaService.getAllSocialLinks();

  return (
    <About.Root>
      <About.Header links={links} />
      <About.Pitch srcPath="" />
    </About.Root>
  );
}

function SkillsSection() {
  const [skills, setSkills] = useState([]);

  const loadSkills = () => setSkills(skillService.getAllSkills());

  return (
    <Skills.Root>
      <Skills.Header onHandleClick={loadSkills} />
      <Skills.SkillsList skills={skills} />
    </Skills.Root>
  );
}

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => setProjects(projectService.getAllProjects());

  return (
    <Projects.Root>
      <Projects.Header onHandleClick={loadProjects} />
      <Projects.Filter />
      <Projects.ProjectsList projects={projects} />
    </Projects.Root>
  );
}

export const MainContent = {
  Root,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
};
