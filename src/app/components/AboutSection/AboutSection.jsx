import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="aboutMe" className="about">
      <h2 className="about__title">Sobre mim</h2>

      <p className="about__description">
        Comecei a programar em 2021 e desde então meu foco tem sido no
        desenvolvimento Front-End
      </p>

      <a className="about__link" target="_blank" rel="noopener" href="/resume_trsaints.pdf">
        ver currículo
      </a>
    </section>
  );
}

export default AboutSection;
