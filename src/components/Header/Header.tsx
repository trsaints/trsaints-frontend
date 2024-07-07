import {HeaderMenu} from '../HeaderMenu'

import {IHeader} from './IHeader'

import './Header.css'

function Header(props: IHeader) {
    const {srcPath} = props

    return (
        <header className='header'>
            <img className='header__banner' src={srcPath} alt=''/>
            <HeaderMenu/>
        </header>
    )
}

export {Header}
