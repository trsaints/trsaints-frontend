import "./MainContent.css";

import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import MainHero from "../MainHero/MainHero";
import ProjectSection from "../ProjectSection/ProjectSection";

function MainContent() {
  return (
    <main className="main">
      <MainHero />

      <AboutSection />

      <ProjectSection />

      <ContactSection />

      <a className="main__top-scroll" href="#">
        <span className="sr-only">Voltar ao topo</span>
      </a>
    </main>
  );
}

export default MainContent;
