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

      <a
        href="#projects-content"
        className="projects__button highlight-btn"
        onClick={onHandleClick}
      >
        ver projetos
      </a>
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

function Content(props) {
  const hasProjectsFound = props?.projects.length > 0,
    hasProjectsLoaded = props?.baseProjectsLength > 0;

  const renderFilter = () => {
    if (hasProjectsLoaded)
      return <Filter onHandleSubmit={props?.onHandleSubmit} />;
  };

  const renderProjects = () => {
    if (hasProjectsFound) return <ProjectsList projects={props?.projects} />;
  };

  return (
    <article id="projects-content" className="projects__content">
      <h3 className="projects__subtitle sr-only">portfolio</h3>

      {renderFilter()}
      {renderProjects()}
    </article>
  );
}

function Filter({ onHandleSubmit }) {
  return (
    <ProjectFilter.Root onHandleSubmit={onHandleSubmit}>
      <ProjectFilter.Select options={["nome", "data"]} />
      <ProjectFilter.SearchBar />
    </ProjectFilter.Root>
  );
}

function Modal({ project }) {
  return (
    <Project.Root>
      <Project.Header {...project} />
      <Project.Desc desc={project?.desc} />
      <Project.Links links={project?.links} />
    </Project.Root>
  );
}

export const Projects = {
  Root,
  Header,
  Content,
  Modal,
};
