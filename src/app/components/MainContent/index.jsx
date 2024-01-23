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
      {skills.length > 0 && <Skills.SkillsList skills={skills} />}
    </Skills.Root>
  );
}

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const loadProjects = () => {
    setProjects(projectService.getAllProjects());
    setFilteredProjects(projects);
  };

  const filterProjects = (e, keyword) => {
    e.preventDefault();

    setFilteredProjects(
      projects.filter((project) =>
        project.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  return (
    <Projects.Root>
      <Projects.Header onHandleClick={loadProjects} />
      <Projects.Content
        projects={filteredProjects}
        onHandleSearch={(e) => setSearch(e.target.value)}
        onHandleSort={(e) => setSearch(e.target.value)}
        onHandleSubmit={(e) => filterProjects(e, search)}
      />
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
