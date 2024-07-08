import {LinkData} from '../../types'

import {Navbar} from '../Navbar'

function HeaderMenu() {
    const mainLinks: LinkData[] = [
        {label: 'início', url: '#'},
        {label: 'sobre', url: '#about'},
        {label: 'skills', url: '#skills'},
        {label: 'projetos', url: '#projects'},
        {label: 'contato', url: '#contact'},
    ]

    return (
        <menu className='header__menu'>
            <li className='header__option'>
                <button className='header__button'>Menu</button>
            </li>

            <li className='hader__option'>
                <Navbar element={'header'} links={mainLinks}/>
            </li>
        </menu>
    )
}

export {HeaderMenu}
