import "./Navbar.css";

export default function Navbar({ element, links }) {
  const linkItems = links.map((link) => (
    <a key={`${link.name}-link`} className={`${element}__link`} href={link.url}>
      {link.name}
    </a>
  ));

  return <nav className={`${element}__nav nav`}>{linkItems}</nav>;
}
