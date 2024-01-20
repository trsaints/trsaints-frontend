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

export const MainHeader = { Root, Banner, Nav };
