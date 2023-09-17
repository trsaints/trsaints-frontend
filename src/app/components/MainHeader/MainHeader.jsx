import Navbar from "../Navbar/Navbar";

function MainHeader() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/trsaints2003/" },
    { name: "GitHub", href: "https://github.com/trsaints" },
  ];

  return (
    <header className="header">
      <h1 className="header__title">Olá, meu nome é Thiago</h1>

      <p className="header__desciption">Eu construo páginas Web</p>

      <Navbar items={socialLinks} />
    </header>
  );
}

export default MainHeader;
