import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import MainHeader from "../MainHeader/MainHeader";
import ProjectSection from "../ProjectSection/ProjectSection";

function MainContent() {
  return (
    <main className="main">
      <MainHeader />

      <AboutSection />

      <ProjectSection />

      <ContactSection />

      <a className="option__link" href="#">
        Voltar ao topo
      </a>
    </main>
  );
}

export default MainContent;
