import "./Skills.css";

import {
  faArrowDown,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "../../Modal/Modal";
import { SkillCard } from "./SkillCard/SkillCard";
import { SkillModal } from "./SkillModal/SkillModal";
import { intersectionService } from "../../../services/intersection-service";

function Root({ children }) {
  return (
    <article className="skills" id="skills">
      {children}
    </article>
  );
}

function Header({ onHandleClick }) {
  const ref = intersectionService.useIntersectionObserver(0.5, "typed-out");

  return (
    <header className="skills__header">
      <h2 className="skills__title" ref={ref}>
        minhas <span lang="en">skills</span>
      </h2>

      <p className="skills__desc">
        Para me tornar um profissional, adiquiri algumas habilidades ao longo do
        tempo. Quer ver o que estou aprendendo? Clique no botão abaixo para
        saber mais.
      </p>

      <HeaderMenu onHandleClick={onHandleClick} />
    </header>
  );
}

function HeaderMenu({ onHandleClick }) {
  return (
    <menu className="skills__menu nav">
      <li className="skills__option">
        <a
          className="highlight-btn"
          href="#skills-list"
          onClick={onHandleClick}
        >
          mostre-me
          <FontAwesomeIcon className="suffix-icon" icon={faArrowDown} />
        </a>
      </li>

      <li className="skills__option">
        <a className="link-btn" href="/curriculo.pdf">
          ver currículo
          <FontAwesomeIcon className="suffix-icon" icon={faUpRightFromSquare} />
        </a>
      </li>
    </menu>
  );
}

function SkillsList({ skills, onHandleClick }) {
  const skillCards = skills.map((skill) => (
    <li key={skill?.id} data-id={skill?.id}>
      <SkillCard.Root>
        <SkillCard.Content skill={skill} />
      </SkillCard.Root>
    </li>
  ));

  return (
    <ul
      className="skills__list window-frame"
      onClick={onHandleClick}
      id="skills-list"
    >
      {skillCards}
    </ul>
  );
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
