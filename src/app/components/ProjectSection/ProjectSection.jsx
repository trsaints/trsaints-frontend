import { useState } from "react";

function ProjectSection() {
  const [projectsShown, setProjectsShown] = useState(false);
  const projectsButtonText = projectsShown
    ? "Ocultar Projetos"
    : "Mostrar Projetos";

  return (
    <section>
      <h2 id="myProjects">Projetos</h2>

      <p>
        Meus trabalhos estão voltados principalmente ao desenvolvimento de UIs,
        contendo alguns projetos de script, desktop ou Back-End
      </p>

      <button className="" onClick={() => setProjectsShown(!projectsShown)}>
        {projectsButtonText}
      </button>
    </section>
  );
}

export default ProjectSection;
