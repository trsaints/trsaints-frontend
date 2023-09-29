import "./MainHero.css";
import Navbar from "../Navbar/Navbar";

function MainHeader() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/trsaints2003/" },
    { name: "GitHub", href: "https://github.com/trsaints" },
  ];

  return (
    <header className="hero">
      <h1 className="hero__title">
        <span lang="en">trsaints</span>
        <span className="sr-only">, programador Web</span>
      </h1>

      <figure className="hero__banner window">
        <img className="hero__img" src="/trsaints_programming.svg" />
      </figure>

      <p className="hero__description">
        Olá. Meu nome é Thiago,
        <br />
        eu construo páginas Web.
      </p>

      <Navbar items={socialLinks} parentSelector={"hero"} />
    </header>
  );
}

export default MainHeader;
