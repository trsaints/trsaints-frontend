import "./App.css";

import { MainHeader } from "../MainHeader";
import { MainContent } from "../MainContent";
import { MainFooter } from "../MainFooter/MainFooter";

function App() {
  return (
    <>
      <MainHeader.Root>
        <MainHeader.Banner srcPath="/computer_logo.svg" />
        <MainHeader.Nav />
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
