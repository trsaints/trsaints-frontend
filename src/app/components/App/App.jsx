import "./App.css";

import { MainContent } from "../MainContent";
import { MainFooter } from "../MainFooter/MainFooter";
import { MainHeader } from "../MainHeader";

function App() {
  return (
    <>
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

export default App;
