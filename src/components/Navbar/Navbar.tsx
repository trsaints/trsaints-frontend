import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {INavbar} from './INavbar'
import './Navbar.css'

function Navbar(props: INavbar) {
    const {element, links, icon = null} = props

    const linkItems = links.map((link, index) => (
        <a key={`${index}-link`} 
           className={`${element}__link`} 
           href={link.url}>
            {link.label}
            {icon !== null && <FontAwesomeIcon className='suffix-icon' icon={icon}/>}
        </a>
    ))

    return <nav className={`${element}__nav nav`}>{linkItems}</nav>
}

export {Navbar} 