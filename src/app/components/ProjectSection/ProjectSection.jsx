import "./ProjectSection.css";

import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectSection() {
  const [projectsShown, setProjectsShown] = useState(false);
  const projectsButtonText = projectsShown
    ? "Ocultar Projetos"
    : "Mostrar Projetos";

  const mockProjects = [
    {
      id: 0,
      name: "Jogo do bicho",
      imageUrl: "",
      description: "Um jogo do bicho",
      repoUrl: "",
      deploy: true,
      deployUrl: "",
    },
    {
      id: 1,
      name: "Jogo do bicho",
      imageUrl: "",
      description: "Um jogo do bicho",
      repoUrl: "",
      deploy: false,
      deployUrl: "",
    },
    {
      id: 2,
      name: "Jogo do bicho",
      imageUrl: "",
      description: "Um jogo do bicho",
      repoUrl: "",
      deploy: true,
      deployUrl: "",
    },
    {
      id: 3,
      name: "Jogo do bicho",
      imageUrl: "",
      description: "Um jogo do bicho",
      repoUrl: "",
      deploy: true,
      deployUrl: "",
    },
    {
      id: 4,
      name: "Jogo do bicho",
      imageUrl: "",
      description: "Um jogo do bicho",
      repoUrl: "",
      deploy: true,
      deployUrl: "",
    },
  ];

  const projectCards = mockProjects.map((project) => {
    return <ProjectCard key={project.id} content={project} />;
  });

  return (
    <section className="projects" id="myProjects">
      <h2 className="projects__title">Projetos</h2>

      <p className="projects__description">
        Meus trabalhos estão voltados principalmente ao desenvolvimento de UIs,
        contendo alguns projetos de script, desktop ou Back-End
      </p>

      <menu className="projects__options">
        <button
          className="projects__button"
          onClick={() => setProjectsShown(!projectsShown)}
        >
          {projectsButtonText}
        </button>
      </menu>

      <div
        className={projectsShown ? "projects__list" : "projects__list hidden"}
      >
        {projectCards}
      </div>
    </section>
  );
}

export default ProjectSection;
