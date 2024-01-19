import { Skill } from "./Skill/Skill";
import { SkillCard } from "./SkillCard/SkillCard";

function Root({ children }) {
  return <article className="skills">{children}</article>;
}

function Header({ onHandleClick }) {
  return (
    <header className="skills_header">
      <h2 className="skills__title">
        minhas <span lang="en">skills</span>
      </h2>

      <p className="skills__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        expedita at necessitatibus cumque molestias voluptatum exercitationem,
        adipisci similique cupiditate, voluptate id? Repellat facilis, veritatis
        earum assumenda iure dolore pariatur suscipit.
      </p>

      <menu className="skills__menu">
        <li className="skills__option">
          <button className="highlight-btn" onClick={onHandleClick}>
            mostre-me
          </button>
        </li>

        <li className="skills__option">
          <a className="link-btn" href="/resume_trsaints.pdf">
            ver currículo
          </a>
        </li>
      </menu>
    </header>
  );
}

function SkillsList({ skills }) {
  const skillCards = skills.map((skill) => (
    <li key={skill.id}>
      <SkillCard.Root>
        <SkillCard.Content skill={skill} />
      </SkillCard.Root>
    </li>
  ));

  return <ul className="skills__list">{skillCards}</ul>;
}

function SkillModal({ skill }) {
  return (
    <Skill.Root>
      <Skill.Header skill={skill} />
      <Skill.Content skill={skill} />
    </Skill.Root>
  );
}

export const Skills = {
  Root,
  Header,
  SkillsList,
  SkillModal,
};
