import "./SkillCard.css";

function Root({ children }) {
  return <article className="skill-card">{children}</article>;
}

function Content({ skill }) {
  return (
    <>
      <h3 className="skill-card__title">{skill.title}</h3>

      <dl className="skill-meta">
        <dt className="sr-only">skill type</dt>

        <dd className="skill-meta__value">{skill.type}</dd>
      </dl>
    </>
  );
}

export const SkillCard = {
  Root,
  Content,
};
