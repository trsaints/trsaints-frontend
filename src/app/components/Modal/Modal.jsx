function Root({ children }) {
  return <dialog className="modal window-frame">{children}</dialog>;
}

function Menu({ onHandleClick }) {
  return (
    <menu className="modal__menu">
      <li>
        <button className="modal__close link-btn" onClick={onHandleClick}>
          <span className="sr-only">fechar</span>
          <span aria-hidden>X</span>
        </button>
      </li>
    </menu>
  );
}

export const Modal = {
  Root,
  Menu,
};
