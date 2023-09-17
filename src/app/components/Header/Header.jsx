import Navbar from "../Navbar/Navbar";

function Header() {
  const mainLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre Mim", href: "#aboutMe" },
    { name: "Projetos", href: "#myProjects" },
    { name: "Contato", href: "#contactMe" },
  ];

  return (
    <header className="header">
      <picture className="logo">
        <img className="logo__icon" src="" alt="" />

        <figcaption className="logo__caption">trsaints</figcaption>
      </picture>

      <Navbar items={mainLinks} />
    </header>
  );
}

export default Header;
