import "./Skills.css";

import { Modal } from "../../Modal/Modal"
import { SkillModal } from "./SkillModal/SkillModal";
import { SkillCard } from "./SkillCard/SkillCard";

function Root({ children }) {
  return (
    <article className="skills" id="skills">
      {children}
    </article>
  );
}

function Header({ onHandleClick }) {
  return (
    <header className="skills__header">
      <h2 className="skills__title">
        minhas <span lang="en">skills</span>
      </h2>

      <p className="skills__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        expedita at necessitatibus cumque molestias voluptatum exercitationem,
        adipisci similique cupiditate, voluptate id? Repellat facilis, veritatis
        earum assumenda iure dolore pariatur suscipit.
      </p>

      <HeaderMenu onHandleClick={onHandleClick} />
    </header>
  );
}

function HeaderMenu({ onHandleClick }) {
  return (
    <menu className="skills__menu nav">
      <li className="skills__option">
        <button className="highlight-btn" onClick={onHandleClick}>
          mostre-me
        </button>
      </li>

      <li className="skills__option">
        <a className="link-btn" href="/resume_20240205_045938_0000.pdf">
          ver currículo
        </a>
      </li>
    </menu>
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

  return <ul className="skills__list window-frame">{skillCards}</ul>;
}

function Skill(props) {
  return (
    <Modal.Root>
      <Modal.Menu onHandleClick={props?.onHandleClick} />

      <SkillModal.Root>
        <SkillModal.Header skill={props?.skill} />
        <SkillModal.Content skill={props?.skill} />
      </SkillModal.Root>
    </Modal.Root>
  );
}

export const Skills = {
  Root,
  Header,
  SkillsList,
  Skill,
};
