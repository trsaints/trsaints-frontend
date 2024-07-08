import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import {Navbar} from '../../components'

import './About.css'
import {ComponentProps, PropsWithChildren} from 'react'
import {SocialLink} from '../../types/SocialLink'

function Root(props: PropsWithChildren) {
    const {children} = props
    
    return (
        <article className='about' id='about'>
            {children}
        </article>
    )
}

interface IHeader extends ComponentProps<'header'> {
    links: SocialLink[]
}

function Header(props: IHeader) {
    const {links} = props
    
    return (
        <header className='about__header'>
            <h2 className='about__title' >
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

interface IPitch extends ComponentProps<'aside'> {
    srcPath: string
}

function Pitch(props: IPitch) {
    const {srcPath} = props
    
    return (
        <aside className='window-frame pitch'>
            <video className='pitch__video' src={srcPath}></video>

            <menu className='pitch__controls'>
                <li className='pitch__control'>
                    <button className='pitch__button'>play</button>
                </li>
            </menu>
        </aside>
    )
}

interface IAbout extends ComponentProps<'article'> {
    links: SocialLink[]
    srcPath: string
}

function About(props: IAbout) {
    const {links, srcPath} = props
    
    return (
        <Root>
            <Header links={links}/>
            <Pitch srcPath={srcPath}/>
        </Root>
    )
}

export {About}