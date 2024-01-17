function Root({ children }) {
  return <article className="projects">{children}</article>;
}

function Header({ onHandleClick }) {
  return (
    <header className="projects__header">
      <h2 className="projects__header-title">meus projetos</h2>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        perferendis eveniet eius odit tenetur mollitia accusamus totam,
        aspernatur obcaecati assumenda consectetur reiciendis magni
        necessitatibus veniam sunt ab suscipit ea. Nam.
      </p>

      <button className="projects__header-button" onClick={onHandleClick}>
        ver projetos
      </button>
    </header>
  );
}

function Filter() {
  return (
    <form className="filter">
      <fieldset>
        <legend>filtro</legend>

        <label htmlFor="">
          Ordenar por:
          <select name="" id="">
            <option value="">Nome</option>
            <option value="">Ano</option>
            <option value="">Deploy</option>
            <option value="" defaultChecked disabled>
              Selecione
            </option>
          </select>
        </label>

        <label htmlFor="">
          insira um texto
          <input type="text" placeholder="api" />
        </label>

        <button type="submit">buscar</button>
      </fieldset>
    </form>
  );
}

function ProjectsList({ projects }) {
  const projectCards = projects.map((project) => <li>{project}</li>);

  return <ul>{projectCards}</ul>;
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
