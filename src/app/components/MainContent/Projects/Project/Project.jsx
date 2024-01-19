function Root({ children }) {
  return <article className="project">{children}</article>;
}

function Header({ title, stack, year, banner }) {
  return (
    <header className="project__header">
      <h2 className="project__title">{title}</h2>

      <ul className="project__stack">
        {stack.map((tech) => (
          <li className="project__tech" key={tech.tech}>
            {tech.tech}
          </li>
        ))}
      </ul>

      <p className="project__date">
        <span className="sr-only">year:</span>
        <time dateTime={year}>{year}</time>
      </p>

      <img src={banner.src} alt={banner.alt} />
    </header>
  );
}

function MainContent({ desc, links }) {
  return (
    <>
      <p className="project__desc">{desc}</p>

      <nav className="project__links">
        {links.map((link) => (
          <a
            className="project__link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
}

export const Project = {
  Root,
  Header,
  MainContent,
};
