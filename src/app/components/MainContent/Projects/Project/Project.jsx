function Root({ children }) {
  return <article className="project">{children}</article>;
}

function Header(props) {
  return (
    <header className="project__header">
      <h2 className="project__title">{props?.title}</h2>

      <Stacks stack={props?.stack} />
      <DateDisplay year={props?.year} />
      <img src={props?.banner.src} alt={props?.banner.alt} />
    </header>
  );
}

function Stacks({ stack }) {
  const stacks = stack.map((tech) => (
    <li className="project__tech" key={tech.tech}>
      {tech.tech}
    </li>
  ));

  return <ul className="project__stacks">{stacks}</ul>;
}

function DateDisplay({ year }) {
  return (
    <p className="project__date">
      <span className="sr-only">year:</span>
      <time dateTime={year}>{year}</time>
    </p>
  );
}

function Desc({ desc }) {
  return <p className="project__desc">{desc}</p>;
}

function Links({ links }) {
  const navLinks = links.map((link) => (
    <a
      className="link-btn"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      key={link.url}
    >
      {link.name}
    </a>
  ));

  return <nav className="project__links">{navLinks}</nav>;
}

export const Project = {
  Root,
  Header,
  Desc,
  Links,
};
