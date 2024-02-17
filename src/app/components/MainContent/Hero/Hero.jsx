import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__title">Thiago Rodrigues Santos</h1>

      <p className="hero__subtitle">
        <span lang="en">web developer</span>
      </p>

      <a className="hero__anchor" href="#about">
        desça a página
      </a>
    </header>
  );
}
