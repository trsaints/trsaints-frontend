function Root({ children }) {
  return <article className="projects">{children}</article>;
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

      <button className="projects__button" onClick={onHandleClick}>
        ver projetos
      </button>
    </header>
  );
}

function Filter() {
  return (
    <form className="filter">
      <fieldset className="filter__fieldset">
        <legend className="filter__legend">filtro</legend>

        <label className="filter__label" htmlFor="filter-select">
          Ordenar por:
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

      <button className="filter__submit" type="submit">
        buscar
      </button>
    </form>
  );
}

function ProjectsList({ projects }) {
  const projectCards = projects.map((project) => <li>{project}</li>);

  return <ul className="projects__list">{projectCards}</ul>;
}

function ProjectModal({ project }) {
  return <h3>{project?.name}</h3>;
}

export const Projects = {
  Root,
  Header,
  Filter,
  ProjectsList,
  ProjectModal,
};
