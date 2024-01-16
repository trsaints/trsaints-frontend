import "./App.css";

import { MainHeader } from "../MainHeader";

function App() {
  return (
    <>
      <MainHeader.Root>
        <MainHeader.Banner srcPath="/computer_logo.svg" />
        <MainHeader.Nav />
      </MainHeader.Root>
    </>
  );
}

export default App;
