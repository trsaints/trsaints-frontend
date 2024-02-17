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
import { Contact } from "./Contact/Contact";

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

  const loadProjects = () =>
    projects.length === 0 && setProjects(projectService.getAllProjects());

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  const filterProjects = (e) => {
    e.preventDefault();

    setSearch(e.target.elements["search"].value);
    setSort(e.target.elements["sort"].value);
  };

  return (
    <Projects.Root>
      <Projects.Header onHandleClick={loadProjects} />
      <Projects.Content
        baseProjectsLength={projects.length}
        projects={filteredProjects}
        onHandleSubmit={filterProjects}
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
