import { ScrollTop, MainHeader, MainFooter } from "../../components";
import { MainContent } from "../../layouts"

import "./App.css";

function App() {
  return (
    <>
      <ScrollTop />
      <MainHeader srcPath='/computer_logo.svg' />
      <MainContent />
      <MainFooter />
    </>
  );
}

export {App};
