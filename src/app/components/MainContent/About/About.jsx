import "./About.css";

import Navbar from "../../Navbar/Navbar";

function Root({ children }) {
  return <article className="about" id="about">{children}</article>;
}

function Header({ links }) {
  return (
    <header className="about__header">
      <h2 className="about__title">sobre mim</h2>

      <p className="about__desc">
        Oi! Eu sou apenas um apaixonado por tecnologia. Estudo programação desde 2021 e, desde então, tenho me dedicado a aprender e aprimorar minhas habilidades. 
      </p>

      <Navbar element={"about"} links={links} />
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
