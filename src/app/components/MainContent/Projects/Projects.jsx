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

function Filter() {
  return (
    <form className="filter">
      <fieldset className="filter__fieldset">
        <legend className="filter__legend">filtro</legend>

        <label className="filter__label" htmlFor="filter-select">
          <span className="highlight-btn">Ordenar por:</span>
          
          <select className="filter__select" name="" id="filter-select">
            <option value="" disabled>
              Selecione
            </option>
            <option value="">Nome</option>
            <option value="">Ano</option>
            <option value="">Deploy</option>
          </select>
        </label>

        <label className="filter__label" htmlFor="filter-search">
          insira um texto
          <input
            className="filter__search"
            type="search"
            placeholder="api"
            id="filter-search"
          />
        </label>
      </fieldset>

      <button className="highlight-btn" type="submit">
        buscar
      </button>
    </form>
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
  return (
    <article id="projects-content" className="projects__content">
      <h3 className="projects__subtitle sr-only">portfolio</h3>

      <ProjectFilter.Root onHandleSubmit={props?.onHandleSubmit}>
        <ProjectFilter.Select options={["nome", "data"]} />
        <ProjectFilter.SearchBar />
      </ProjectFilter.Root>

      {props?.projects.length > 0 && (
        <ProjectsList projects={props?.projects} />
      )}
    </article>
  );
}

function Modal({ project }) {
  return (
    <Project.Root>
      <Project.Header {...project} />

      <Project.Content {...project} />
    </Project.Root>
  );
}

export const Projects = {
  Root,
  Header,
  Content,
  Modal,
};
