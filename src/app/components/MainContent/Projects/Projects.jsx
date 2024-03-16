import "./Projects.css";

import { ProjectModal } from "./ProjectModal/ProjectModal";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectFilter } from "./ProjectFilter/ProjectFilter";
import { Modal } from "../../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { intersectionService } from "../../../services/intersection-service";

function Root({ children }) {
  return (
    <article className="projects" id="projects">
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
    <>
      <p className="projects__count">{projects.length} projetos encontrados</p>

      <ul className="projects__list" id="projects-list">
        {projectCards}
      </ul>
    </>
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
    <Modal.Root>
      <Modal.Menu onHandleClick={props?.onHandleClick} />

      <ProjectModal.Root>
        <ProjectModal.Header {...props?.project} />
        <ProjectModal.Desc desc={props?.project?.desc} />
        <ProjectModal.Links links={props?.project?.links} />
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
