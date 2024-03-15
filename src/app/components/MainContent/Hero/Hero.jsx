import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__title">
        <span className="typed-out">
          Thiago Rodrigues Santos
          <span aria-hidden>_</span>
        </span>
      </h1>

      <p className="hero__subtitle">
        <span lang="en">web developer</span>
      </p>

      <a className="hero__anchor" href="#about">
        desça a página
        <FontAwesomeIcon className="suffix-icon" icon={faArrowDown} />
      </a>
    </header>
  );
}
