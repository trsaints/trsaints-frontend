import "./ProjectCard.css";

function Root({ children }) {
  return <article className="project-card">{children}</article>;
}

function Content({ project }) {
  return (
    <>
      <h3 className="project-card__title">{project.title}</h3>

      <dl className="meta-data">
        <dt className="meta-data__key">stack</dt>
        <dd className="meta-data__value">
          {project.stack.map((tech) => tech.tech).join(", ")}
        </dd>
      </dl>

      <dl className="meta-data">
        <dt className="meta-data__key">deploy</dt>
        <dd className="meta-data__value">
          {project.links[1]["url"] !== "" && project.links[1]["url"]}
        </dd>
      </dl>
    </>
  );
}

export const ProjectCard = {
  Root,
  Content,
};
