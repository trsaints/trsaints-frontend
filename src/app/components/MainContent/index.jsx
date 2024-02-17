import { useState } from "react";
import {
  projectService,
  skillService,
  socialMediaService,
} from "../../services/db-service";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
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
      {skills.length > 0 && <Skills.SkillsList skills={skills} />}
    </Skills.Root>
  );
}

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const loadProjects = () => {
    if (projects.length === 0) setProjects(projectService.getAllProjects());
  };

  const searchProjects = (e) => {
    e.preventDefault();

    setSearch(e.target.elements["search"].value);
    setSort(e.target.elements["sort"].value);
  };

  const filteredProjects = projectService.filterProjects(projects, search);

  return (
    <Projects.Root>
      <Projects.Header onHandleClick={loadProjects} />
      <Projects.Content
        onHandleSubmit={searchProjects}
        baseProjectsLength={projects.length}
        projects={filteredProjects}
      />
    </Projects.Root>
  );
}

function ContactSection() {
  return (
    <Contact.Root>
      <Contact.Header />
      <Contact.Form />
    </Contact.Root>
  );
}

export const MainContent = {
  Root,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
};
