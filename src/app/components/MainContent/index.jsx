import { Projects } from "./Projects/Projects";
import { useState } from "react";
import { projectService } from "../../services/project-service";

function Root({ children }) {
  return <main className="main">{children}</main>;
}

function ProjectsSection() {
  const [projects, setProjects] = useState(["hi"]);

  const loadProjects = () => setProjects(projectService.getAllProjects());

  return (
    <Projects.Root>
      <Projects.Header onHandleClick={loadProjects} />
      <Projects.Filter />
      <Projects.ProjectsList projects={projects} />
    </Projects.Root>
  );
}

export const MainContent = { Root, ProjectsSection };
