import Navbar from "../../Navbar/Navbar";

function Root({ children }) {
  return <menu className="header__menu">{children}</menu>;
}

function Button() {
  return (
    <li className="header__option">
      <button className="header__button">Menu</button>
    </li>
  );
}

function Nav() {
  const mainLinks = [
    { name: "início", url: "#" },
    { name: "sobre", url: "#about" },
    { name: "skills", url: "#skills" },
    { name: "projetos", url: "#projects" },
    { name: "contato", url: "#contact" },
  ];

  return (
    <li>
      <Navbar element={"header"} links={mainLinks} />
    </li>
  );
}

export const HeaderMenu = {
  Root,
  Button,
  Nav,
};
