/* eslint-disable react/prop-types */
import "./Navbar.css";

function Navbar({ items }) {
  const links = items.map((item) => {
    return (
      <>
        <li key={item.href}>
          <a href={item.href}>{item.name}</a>
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
