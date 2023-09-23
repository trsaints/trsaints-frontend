import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  const menuText = menuToggle ? "Abrir Menu" : "Fechar Menu";
  const toggleMenu = () => setMenuToggle(!menuToggle);
  const hideAfterClick = () => setMenuToggle(true);

  const mainLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre Mim", href: "#aboutMe" },
    { name: "Projetos", href: "#myProjects" },
    { name: "Contato", href: "#contactMe" },
  ];

  return (
    <header className="header">
      <img
        className="header__icon"
        src="/computer_logo.png"
        alt=""
        aria-hidden
      />

      <menu className="header__menu">
        <li className="header__option">
          <button className="header__button" onClick={toggleMenu}>
            <span className="sr-only">{menuText}</span>
          </button>
        </li>
      </menu>

      <Navbar
        items={mainLinks}
        parentSelector={"header"}
        toggle={menuToggle}
        handleToggle={hideAfterClick}
      />
    </header>
  );
}

export default Header;
