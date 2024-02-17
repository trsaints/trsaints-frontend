import "./ProjectCard.css";

function Root({ children }) {
  return <article className="project-card">{children}</article>;
}

function Content({ project }) {
  return (
    <>
      <h3 className="project-card__title">{project.title}</h3>

      <MetaStack stack={project.stack} />
      <MetaDeploy links={project.links} />
    </>
  );
}

function MetaStack({ stack }) {
  const mainStack = stack.map((tech) => tech.tech).join(", ");

  return (
    <dl className="project__meta">
      <dt className="project__meta__key">
        <span lang="en">stack</span>
      </dt>

      <dd className="project__meta__value">{mainStack}</dd>
    </dl>
  );
}

function MetaDeploy({ links }) {
  const deployLink = links[1]["url"] !== "" && links[1]["url"];

  return (
    <dl className="project__meta">
      <dt className="project__meta__key">deploy</dt>

      <dd className="project__meta__value">{deployLink}</dd>
    </dl>
  );
}

export const ProjectCard = {
  Root,
  Content,
};
