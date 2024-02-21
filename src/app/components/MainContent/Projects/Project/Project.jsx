import "./Project.css";

function Root({ children }) {
  return <article className="project window-frame">{children}</article>;
}

function Header(props) {
  return (
    <header className="project__header">
      <h2 className="project__title">{props?.title}</h2>

      <DateDisplay year={props?.year} />
      <Stacks stack={props?.stack} />
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
  let buttonSelector = "";

  const navLinks = links.map((link) => {
    const hasDeploy = link?.name == "deploy" && link?.url !== "";

    if (hasDeploy) buttonSelector = "highlight-btn";
    else buttonSelector = "link-btn";

    return (
      <a
        className={buttonSelector}
        href={link?.url}
        target="_blank"
        rel="noopener noreferrer"
        key={link?.url}
      >
        {link?.name}
      </a>
    );
  });

  return <nav className="project__links">{navLinks}</nav>;
}

export const Project = {
  Root,
  Header,
  Desc,
  Links,
};
