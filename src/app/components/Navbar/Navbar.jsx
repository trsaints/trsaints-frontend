import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ element, links, icon = null }) {
  const linkItems = links.map((link) => (
    <a key={`${link.name}-link`} className={`${element}__link`} href={link.url}>
      {link.name}
      {icon !== null && <FontAwesomeIcon className="suffix-icon" icon={icon} />}
    </a>
  ));

  return <nav className={`${element}__nav nav`}>{linkItems}</nav>;
}
