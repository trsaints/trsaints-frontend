import {ComponentProps} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import {ISkillsHeader} from './ISkillsHeader'
import './SkillsHeader.css'

function Root(props: ComponentProps<'header'>) {
    const {children} = props

    return (
        <header className='skills__header'>
            <h2 className='skills__title'>
                minhas <span lang='en'>skills</span>
            </h2>

            <p className='skills__desc'>
                Para me tornar um profissional, adiquiri algumas habilidades ao longo do
                tempo. Quer ver o que estou aprendendo? Clique no botão abaixo para
                saber mais.
            </p>

            {children}
        </header>
    )
}

function SkillsHeader(props: ISkillsHeader) {
    const {onHandleClick} = props
    
    return (
        <Root>
            <menu className='skills__menu nav'>
                <li className='skills__option'>
                    <a
                        className='highlight-btn'
                        href='#skills-list'
                        onClick={onHandleClick}
                    >
                        mostre-me
                        <FontAwesomeIcon className='suffix-icon' icon={faArrowDown}/>
                    </a>
                </li>

                <li className='skills__option'>
                    <a className='link-btn' href='/curriculo.pdf'>
                        ver currículo
                        <FontAwesomeIcon className='suffix-icon' icon={faUpRightFromSquare}/>
                    </a>
                </li>
            </menu>
        </Root>
    )
}

export {SkillsHeader}