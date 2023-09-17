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
    <section>
      <h2 id="myProjects">Projetos</h2>

      <p>
        Meus trabalhos estão voltados principalmente ao desenvolvimento de UIs,
        contendo alguns projetos de script, desktop ou Back-End
      </p>

      <button className="" onClick={() => setProjectsShown(!projectsShown)}>
        {projectsButtonText}
      </button>

      <div className={projectsShown ? "projects" : "projects hidden"}>
        {projectCards}
      </div>
    </section>
  );
}

export default ProjectSection;
