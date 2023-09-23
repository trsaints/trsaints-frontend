/* eslint-disable react/prop-types */
import "./Navbar.css";

function Navbar({
  toggle = false,
  parentSelector,
  items,
  handleToggle = null,
}) {
  const navbarClass = `${parentSelector}__navbar`;
  const links = items.map((item) => {
    return (
      <>
        <li className={`${parentSelector}__item`}>
          <a className={`${parentSelector}__link`} onClick={handleToggle} href={item.href}>
            {item.name}
          </a>
        </li>
      </>
    );
  });

  return (
    <>
      <nav className={toggle ? `${navbarClass} toggle` : navbarClass}>
        {links}
      </nav>
    </>
  );
}

export default Navbar;
