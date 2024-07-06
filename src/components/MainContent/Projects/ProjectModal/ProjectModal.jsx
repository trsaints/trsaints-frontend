import {
  faUpRightFromSquare,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProjectModal.css";

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
      <span className="sr-only" lang="en">
        year:
      </span>
      <time dateTime={year}>{year}</time>
    </p>
  );
}

function Desc({ desc }) {
  return <p className="project__desc">{desc}</p>;
}

function Links({ title, links }) {
  let buttonSelector = "";

  const navLinks = links.map((link) => {
    const hasDeploy = link?.name === "deploy" && link?.url !== "";
    const ariaMessage = hasDeploy ? `Acessar o site ${title}` : `Ver código-fonte de ${title}`;

    if (hasDeploy) buttonSelector = "highlight-btn";
    else buttonSelector = "link-btn";

    return (
      <a
        aria-label={ariaMessage}
        className={buttonSelector}
        href={link?.url}
        target="_blank"
        rel="noopener noreferrer"
        key={link?.url}
      >
        {link?.name}

        <LinkIcon link={link} />
      </a>
    );
  });

  return <nav className="project__links">{navLinks}</nav>;
}

function LinkIcon({ link }) {
  const icon = (type) => (
    <FontAwesomeIcon className="suffix-icon" icon={type} />
  );

  let iconType = {};

  if (link?.name === "deploy") iconType = faGlobe;
  else if (link?.name === "ver código fonte") iconType = faUpRightFromSquare;

  return icon(iconType);
}

function Banner({ banner }) {
  return (
    <figure className="project__figure">
      <figcaption className="project__figcaption">{banner?.alt}</figcaption>

      <img className="project__img" src={banner?.src} alt={banner?.alt} />
    </figure>
  );
}

export const ProjectModal = {
  Root,
  Header,
  Desc,
  Links,
  Banner,
};
