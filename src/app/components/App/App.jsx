import "./App.css";

import { MainHeader } from "../MainHeader";
import { MainContent } from "../MainContent";

function App() {
  return (
    <>
      <MainHeader.Root>
        <MainHeader.Banner srcPath="/computer_logo.svg" />
        <MainHeader.Nav />
      </MainHeader.Root>

      <MainContent.Root>
        <MainContent.SkillsSection />
        <MainContent.ProjectsSection />
      </MainContent.Root>
    </>
  );
}

export default App;
