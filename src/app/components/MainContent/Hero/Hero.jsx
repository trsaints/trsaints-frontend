import "./Hero.css";

import { intersectionService } from "../../../services/intersection-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const ref = intersectionService.useIntersectionObserver(1, "typed-out");

  return (
    <header className="hero">
      <h1 className="hero__title crt">
        <span ref={ref}>
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
