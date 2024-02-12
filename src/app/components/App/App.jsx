import "./App.css";

import { MainHeader } from "../MainHeader";
import { MainContent } from "../MainContent";
import { MainFooter } from "../MainFooter/MainFooter";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <MainHeader.Root>
        <MainHeader.Banner srcPath="/computer_logo.svg" />
        <MainHeader.Menu onHandleClick={() => setVisible(!visible)} />
        {visible && <MainHeader.Nav />}
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
