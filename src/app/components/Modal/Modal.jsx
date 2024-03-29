import "./Modal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Root({ children }) {
  return <dialog className="modal window-frame">{children}</dialog>;
}

function Menu({ onHandleClick }) {
  return (
    <menu className="modal__menu">
      <li>
        <button className="modal__close link-btn" onClick={onHandleClick}>
          <span className="sr-only">fechar</span>
          <FontAwesomeIcon icon={faClose} size="lg" />
        </button>
      </li>
    </menu>
  );
}

export const Modal = {
  Root,
  Menu,
};
