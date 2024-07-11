import {ComponentProps, useContext} from 'react'
import {Skill} from '../../models'

import {faArrowDown, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'

import {SkillCard} from '../../components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {SkillsContext} from '../../context/SkillsContext'
import {MainContext} from '../../context/MainContext'
import {SkillsContextProvider} from '../../context/providers'

import './Skills.css'

function SkillsHeader() {
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

            <SkillsHeaderMenu/>
        </header>
    )
}

function SkillsHeaderMenu() {
    const {loadSkills} = useContext(SkillsContext)

    return (
        <menu className='skills__menu nav'>
            <li className='skills__option'>
                <a
                    className='highlight-btn'
                    href='#skills-list'
                    onClick={loadSkills}
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
    )
}

interface ISkillsList extends ComponentProps<'ul'> {
    skills: Skill[]
}

function SkillsList(props: ISkillsList) {
    const {skills}      = props
    const {selectSkill} = useContext(SkillsContext)

    const skillCards = skills.map((skill) => (
        <li key={skill?.uuid} data-id={skill?.uuid}>
            <SkillCard.Root>
                <SkillCard.Content skill={skill}/>
            </SkillCard.Root>
        </li>
    ))

    return (skills.length > 0)
        && (
            <ul className='skills__list window-frame' onClick={selectSkill} id='skills-list'>
                {skillCards}
            </ul>
        )
}

function Skills() {
    const {skills} = useContext(MainContext)

    return (
        <SkillsContextProvider>
            <article className='skills' id='skills'>
                <SkillsHeader/>
                <SkillsList skills={skills}/>
            </article>
        </SkillsContextProvider>
    )
}

export {Skills}

