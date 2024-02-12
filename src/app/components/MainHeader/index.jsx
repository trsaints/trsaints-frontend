import Navbar from "../Navbar/Navbar";

import "./index.css";

function Root({ children }) {
  return <header className="header">{children}</header>;
}

function Banner({ srcPath }) {
  return <img className="header__banner" src={srcPath} alt="" />;
}

function Nav() {
  const mainLinks = [
    { name: "início", url: "#" },
    { name: "sobre", url: "#about" },
    { name: "skills", url: "#skills" },
    { name: "projetos", url: "#projects" },
    { name: "contato", url: "#contact" },
  ];

  return <Navbar element={"header"} links={mainLinks} />;
}

function Menu({ onHandleClick }) {
  return (
    <menu className="header__menu">
      <li className="header__option">
        <button className="header__button" onClick={onHandleClick}>
          Menu
        </button>
      </li>
    </menu>
  );
}

export const MainHeader = { Root, Banner, Menu, Nav };
