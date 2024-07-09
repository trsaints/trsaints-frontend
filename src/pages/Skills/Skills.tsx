import {faArrowDown, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'

import {Modal, SkillCard, SkillModal} from '../../components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Skills.css'
import {ComponentProps, useContext} from 'react'
import {Skill} from '../../models'
import {SkillsContext} from '../../context/SkillsContext'
import {MainContext} from '../../context/MainContext'
import {skillService} from '../../services'
import {SkillsContextProvider} from '../../context/providers'

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

interface ISkillPanel extends ComponentProps<'dialog'> {
    skill?: Skill
}

function SkillPanel(props: ISkillPanel) {
    const {skill}     = props
    const {hideSkill} = useContext(SkillsContext)

    return skill !== undefined && (
        <Modal onHandleClick={hideSkill}>
            <SkillModal skill={skill}/>
        </Modal>
    )
}

function Skills() {
    const {closeOnEscape} = useContext(SkillsContext)
    const {skills}  = useContext(MainContext)
    const {skillId} = useContext(MainContext)

    const selectedSkill = skillService.getSkillById(skills, skillId)

    return (
        <SkillsContextProvider>
            <article className='skills' id='skills' onKeyDown={closeOnEscape}>
                <SkillsHeader/>
                <SkillsList skills={skills}/>
                <SkillPanel skill={selectedSkill}/>
            </article>
        </SkillsContextProvider>
    )
}

export {Skills}

