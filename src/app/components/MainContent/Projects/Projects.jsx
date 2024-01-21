import "./Projects.css";

import { Project } from "./Project/Project";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectFilter } from "./ProjectFilter/ProjectFilter";

function Root({ children }) {
  return (
    <article className="projects" id="projects">
      {children}
    </article>
  );
}

function Header({ onHandleClick }) {
  return (
    <header className="projects__header">
      <h2 className="projects__title">meus projetos</h2>

      <p className="projects__desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        perferendis eveniet eius odit tenetur mollitia accusamus totam,
        aspernatur obcaecati assumenda consectetur reiciendis magni
        necessitatibus veniam sunt ab suscipit ea. Nam.
      </p>

      <button className="highlight-btn" onClick={onHandleClick}>
        ver projetos
      </button>
    </header>
  );
}

function ProjectsList({ projects }) {
  const projectCards = projects.map((project) => (
    <li key={project.id}>
      <ProjectCard.Root>
        <ProjectCard.Content project={project} />
      </ProjectCard.Root>
    </li>
  ));

  return <ul className="projects__list">{projectCards}</ul>;
}

function Content({ projects }) {
  return (
    <article className="projects__content">
      <h3 className="projects__subtitle sr-only">portfolio</h3>

      <ProjectFilter.Root>
        <ProjectFilter.Select options={["nome", "data"]} />
        <ProjectFilter.SearchBar />
      </ProjectFilter.Root>

      {projects.length > 0 && <ProjectsList projects={projects} />}
    </article>
  );
}

function Modal({ project }) {
  return (
    <Project.Root>
      <Project.Header
        title={project.title}
        stack={project.stack}
        year={project.year}
        banner={project.banner}
      />

      <Project.Content desc={project.desc} links={project.links} />
    </Project.Root>
  );
}

export const Projects = {
  Root,
  Header,
  Content,
  Modal,
};
