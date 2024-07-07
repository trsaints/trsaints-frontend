import {HeaderMenu} from "../HeaderMenu"

import "./MainHeader.css"

function MainHeader({srcPath}) {
    return (
        <header className="header">
            <img className="header__banner" src={srcPath} alt=""/>

            <HeaderMenu />
        </header>
    )
}

export {MainHeader}
