import { MainContent } from "../MainContent/MainContent.jsx";
import { MainFooter } from "../MainFooter/MainFooter";
import { MainHeader } from "../MainHeader/MainHeader.jsx";
import {ScrollTop} from "../ScrollTop/ScrollTop";

import "./App.css";

function App() {
  return (
    <>
      <ScrollTop />

      <MainHeader.Root>
        <MainHeader.Banner srcPath="/computer_logo.svg" />
        <MainHeader.Menu />
      </MainHeader.Root>

      <MainContent.Root>
        <MainContent.HeroSection />
        <MainContent.AboutSection />
        <MainContent.SkillsSection />
        <MainContent.ProjectsSection />
        <MainContent.ContactSection />
      </MainContent.Root>

      <MainFooter.Root>
        <MainFooter.Content />
      </MainFooter.Root>
    </>
  );
}

export {App};
