import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { intersectionService } from "../../services";

import { Modal, ProjectModal, ProjectFilter, ProjectCard } from "../../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Projects.css";

function Root({ children, onHandleKeyDown }) {
  return (
    <article className="projects" id="projects" onKeyDown={onHandleKeyDown} >
      {children}
    </article>
  );
}

function Header({ onHandleClick }) {
  const ref = intersectionService.useIntersectionObserver(0.5, "typed-out");

  return (
    <header className="projects__header">
      <h2 className="projects__title" ref={ref}>
        meus projetos
      </h2>

      <p className="projects__desc">
        Atualmente, meus projetos consistem, principalmente, em programação Web
        e automação. Quer vê-los? Clique no botão abaixo.
      </p>

      <a
        href="#projects-content"
        className="projects__button highlight-btn"
        onClick={onHandleClick}
      >
        ver projetos
        <FontAwesomeIcon className="suffix-icon" icon={faArrowDown} />
      </a>
    </header>
  );
}

function ProjectsList({ projects }) {
  const projectCards = projects.map((project) => (
    <li key={project?.id} data-id={project?.id}>
      <ProjectCard.Root>
        <ProjectCard.Content project={project} />
      </ProjectCard.Root>
    </li>
  ));

  return (
    <article className="projects__result">
      <h3 className="projects__count" aria-live="polite">
        {projects.length} projetos encontrados
      </h3>

      <ul className="projects__list" id="projects-list">
        {projectCards}
      </ul>
    </article>
  );
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
    <article
      id="projects-content"
      className="projects__content"
      onClick={props?.onHandleClick}
    >
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

function Project(props) {
  return (
    <Modal.Root onHandleKeyDown={props?.onHandleKeyDown}>
      <Modal.Menu onHandleClick={props?.onHandleClick} />

      <ProjectModal.Root>
        <ProjectModal.Header {...props?.project} />
        <ProjectModal.Desc desc={props?.project?.desc} />
        <ProjectModal.Links
          title={props?.project?.title}
          links={props?.project?.links}
        />
        <ProjectModal.Banner banner={props?.project?.banner} />
      </ProjectModal.Root>
    </Modal.Root>
  );
}

export const Projects = {
  Root,
  Header,
  Content,
  Project,
};
