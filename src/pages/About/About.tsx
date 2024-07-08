import {AboutHeader, Pitch} from '../../components'

import {IAbout} from './IAbout'
import './About.css'

function About(props: IAbout) {
    const {links, srcPath} = props

    return (
        <article className='about' id='about'>
            <AboutHeader links={links}/>
            <Pitch srcPath={srcPath}/>
        </article>
    )
}

export {About}