/* eslint-disable react/prop-types */
import "./Navbar.css";

function Navbar({ items }) {
  const links = items.map((item) => {
    return (
      <>
        <li className="navbar__item" key={item.href}>
          <a className="navbar__link" href={item.href}>{item.name}</a>
        </li>
      </>
    );
  });

  return (
    <>
      <nav className="navbar">{links}</nav>
    </>
  );
}

export default Navbar;
