/* eslint-disable react/prop-types */
import "./Navbar.css";

function Navbar({ parentSelector, items }) {
  const links = items.map((item) => {
    return (
      <>
        <li className="navbar__item">
          <a className="navbar__link" href={item.href}>{item.name}</a>
        </li>
      </>
    );
  });

  return (
    <>
      <nav className={`${parentSelector}__navbar`}>{links}</nav>
    </>
  );
}

export default Navbar;
