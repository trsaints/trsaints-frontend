import "./ProjectCard.css";

function ProjectCard({ content }) {
  const { name, imageURL, description, repoURL, deploy, deployURL } = content;

  const deployButton = deploy ? (
    <li className="project__option">
      <a className="project__link" href={deployURL}>
        Teste Agora
      </a>
    </li>
  ) : (
    ""
  );

  return (
    <details className="project window">
      <summary className="project__title">{name}</summary>

      <img className="project__banner" src={imageURL} />

      <p className="project__description">{description}</p>

      <nav className="project__nav">
        <li className="project__option">
          <a className="project__link" href={repoURL}>
            Veja o Código
          </a>
        </li>

        {deployButton}
      </nav>
    </details>
  );
}

export default ProjectCard;
