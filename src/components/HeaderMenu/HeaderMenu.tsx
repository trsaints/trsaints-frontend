import {Navbar} from '../Navbar'

function HeaderMenu() {
    const mainLinks = [
        {name: 'início', url: '#'},
        {name: 'sobre', url: '#about'},
        {name: 'skills', url: '#skills'},
        {name: 'projetos', url: '#projects'},
        {name: 'contato', url: '#contact'},
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
