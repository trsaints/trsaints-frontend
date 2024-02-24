import "./Project.css";

function Root({ children }) {
  return <article className="project">{children}</article>;
}

function Header(props) {
  return (
    <header className="project__header">
      <h3 className="project__title">{props?.title}</h3>

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

function Banner({ banner }) {
  return (
    <aside className="project__banner">
      <h4 className="project__banner-title">
        <span lang="en">Preview</span>
      </h4>

      <figure className="project__figure">
        <img className="project__img" src={banner?.src} alt={banner?.alt} />

        <figcaption className="project__figcaption">{banner?.alt}</figcaption>
      </figure>
    </aside>
  );
}

export const Project = {
  Root,
  Header,
  Desc,
  Links,
  Banner,
};
