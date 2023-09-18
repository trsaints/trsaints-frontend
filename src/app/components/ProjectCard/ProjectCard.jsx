import "./ProjectCard.css";

function ProjectCard({ content }) {
  const { name, imageUrl, description, repoUrl, deploy, deployURL } = content;

  const deployButton = deploy ? (
    <li className="project__option">
      <a className="project__link" href={deployURL}>Ver Projeto</a>
    </li>
  ) : (
    ""
  );

  return (
    <article className="project">
      <h3 className="project__title">{name}</h3>

      <img className="project__banner" src={imageUrl} />

      <p className="project__description">{description}</p>

      <nav className="project__nav">
        <li className="project__option">
          <a className="project__link" href={repoUrl}>
            Ver Códgo-Fonte
          </a>
        </li>

        {deployButton}
      </nav>
    </article>
  );
}

export default ProjectCard;
