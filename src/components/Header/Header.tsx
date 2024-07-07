import {HeaderMenu} from '../HeaderMenu'

import './Header.css'

function Header({srcPath}) {
    return (
        <header className='header'>
            <img className='header__banner' src={srcPath} alt=''/>

            <HeaderMenu/>
        </header>
    )
}

export {Header}
