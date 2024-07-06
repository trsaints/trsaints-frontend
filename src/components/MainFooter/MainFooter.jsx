import "./MainFooter.css";

function Root({ children }) {
  return <footer className="footer">{children}</footer>;
}

function Content() {
  const currentYear = new Date().getFullYear();

  return (
    <article className="footer__content">
      <h2 className="footer__title">
        thiago rodrigues santos - desenvolvedor <span lang="en">front-end</span>
      </h2>

      <time className="footer__time" dateTime={currentYear}>
        {currentYear}
      </time>

      <p className="footer__desc">
        feito por{" "}
        <a
          lang="en"
          rel="noopener"
          target="_blank"
          href="https://github.com/trsaints"
        >
          @trsaints
        </a>
      </p>
    </article>
  );
}

export const MainFooter = {
  Root,
  Content,
};
