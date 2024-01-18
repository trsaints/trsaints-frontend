function Root({ children }) {
  return <article>{children}</article>;
}

function Content({ project }) {
  return (
    <>
      <h3>{project.title}</h3>

      <dl>
        <dt>stack</dt>
        <dd>{project.stack.map((tech) => tech.tech).join(", ")}</dd>
      </dl>

      <dl>
        <dt>deploy</dt>
        <dd>
          {project.links[1]["url"] !== "" ? project.links[1]["url"] : "none"}
        </dd>
      </dl>
    </>
  );
}

export const ProjectCard = {
  Root,
  Content,
};
