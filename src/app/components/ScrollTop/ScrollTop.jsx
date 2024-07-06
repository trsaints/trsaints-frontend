import "./ScrollTop.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  return (
    <a className="scroll-top" href="#">
      <span className="sr-only">Voltar ao início</span>
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};

export default ScrollTop;
