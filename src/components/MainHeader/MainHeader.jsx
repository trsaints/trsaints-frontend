import { HeaderMenu } from "./HeaderMenu";

import "./MainHeader.css";

function Root({ children }) {
  return <header className="header">{children}</header>;
}

function Banner({ srcPath }) {
  return <img className="header__banner" src={srcPath} alt="" />;
}

function Menu() {
  return (
    <HeaderMenu.Root>
      <HeaderMenu.Button />
      <HeaderMenu.Nav />
    </HeaderMenu.Root>
  );
}

export const MainHeader = { Root, Banner, Menu };
