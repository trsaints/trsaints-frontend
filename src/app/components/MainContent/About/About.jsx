import "./About.css";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { intersectionService } from "../../../services/intersection-service";
import Navbar from "../../Navbar/Navbar";

function Root({ children }) {
  return (
    <article className="about" id="about">
      {children}
    </article>
  );
}

function Header({ links }) {
  const ref = intersectionService.useIntersectionObserver(0.5, "typed-out");

  return (
    <header className="about__header">
      <h2 className="about__title" ref={ref}>
        sobre mim
      </h2>

      <p className="about__desc">
        Oi! Eu sou apenas um apaixonado por tecnologia. Estudo programação desde
        2021 e, desde então, tenho me dedicado a aprender e aprimorar minhas
        habilidades.
      </p>

      <Navbar element={"about"} links={links} icon={faUpRightFromSquare} />
    </header>
  );
}

function Pitch({ srcPath }) {
  return (
    <aside className="window-frame pitch">
      <video className="pitch__video" src={srcPath}></video>

      <menu className="pitch__controls">
        <li className="pitch__control">
          <button className="pitch__button">play</button>
        </li>
      </menu>
    </aside>
  );
}

export const About = { Root, Header, Pitch };
