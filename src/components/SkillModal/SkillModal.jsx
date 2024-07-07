import "./SkillModal.css";

function Root({ children }) {
  return <article className="skill">{children}</article>;
}

function Header({ skill }) {
  return (
    <header className="skill__header">
      <h3 className="skill__title">{skill?.title}</h3>

      <dl className="skill-meta">
        <dt className="sr-only">tipo:</dt>

        <dd className="skill-meta__value" lang="en">
          {skill?.type}
        </dd>
      </dl>
    </header>
  );
}

function Content({ skill }) {
  return (
    <>
      <p className="skill__desc">{skill?.desc}</p>

      <figure className="skill__banner">
        <figcaption>{skill?.title}</figcaption>

        <img className="skill__img" src={skill?.banner.path} alt={skill?.banner.alt} />
      </figure>
    </>
  );
}

export const SkillModal = {
  Root,
  Header,
  Content,
};
