import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import {Navbar} from '../Navbar'

import {IAboutHeader} from './IAboutHeader'
import './AboutHeader.css'

function AboutHeader(props: IAboutHeader) {
    const {links} = props

    return (
        <header className='about__header'>
            <h2 className='about__title'>
                sobre mim
            </h2>

            <p className='about__desc'>
                Oi! Eu sou apenas um apaixonado por tecnologia. Estudo programação desde
                2021 e, desde então, tenho me dedicado a aprender e aprimorar minhas
                habilidades.
            </p>

            <Navbar element={'about'} links={links} icon={faUpRightFromSquare}/>
        </header>
    )
}

export {AboutHeader}