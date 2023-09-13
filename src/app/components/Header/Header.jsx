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
      <Navbar items={mainLinks}></Navbar>
    </header>
  );
}

export default Header;
