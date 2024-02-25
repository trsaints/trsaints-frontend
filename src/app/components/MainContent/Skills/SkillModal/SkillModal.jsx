import "./SkillModal.css";

function Root({ children }) {
  return <article className="skill">{children}</article>;
}

function Header({ skill }) {
  return (
    <header className="skill__header">
      <h3 className="skill__title">{skill?.title}</h3>

      <dl className="skill__meta">
        <dt className="sr-only">tipo:</dt>

        <dd className="skill__meta__value" lang="en">
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

      <picture className="skill__banner">
        <img src={skill?.banner.path} alt={skill?.banner.alt} />
      </picture>
    </>
  );
}

export const SkillModal = {
  Root,
  Header,
  Content,
};
