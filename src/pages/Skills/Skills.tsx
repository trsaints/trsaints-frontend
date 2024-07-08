import {faArrowDown, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'

import {Modal, SkillCard, SkillModal} from '../../components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Skills.css'
import {ComponentProps, KeyboardEventHandler, MouseEventHandler} from 'react'
import {Skill} from '../../models'

interface IRoot extends ComponentProps<'article'> {
    onHandleKeyDown: KeyboardEventHandler<HTMLElement>
}

function Root(props: IRoot) {
    const {children, onHandleKeyDown} = props
    
    return (
        <article className='skills' id='skills' onKeyDown={onHandleKeyDown}>
            {children}
        </article>
    )
}

interface ISkillsHeader extends ComponentProps<'header'> {
    onHandleClick: MouseEventHandler<HTMLAnchorElement>
}

function SkillsHeader(props: ISkillsHeader) {
    const {onHandleClick} = props
    
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

            <SkillsHeaderMenu loadSkills={onHandleClick}/>
        </header>
    )
}

interface ISkillsHeaderMenu extends ComponentProps<'menu'> {
    loadSkills: MouseEventHandler<HTMLAnchorElement>
}

function SkillsHeaderMenu(props: ISkillsHeaderMenu) {
    const {loadSkills} = props
    
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
    renderPanel: MouseEventHandler<HTMLUListElement>
}

function SkillsList(props: ISkillsList) {
    const {skills, renderPanel} = props
    
    const skillCards = skills.map((skill) => (
        <li key={skill?.id} data-id={skill?.id}>
            <SkillCard.Root>
                <SkillCard.Content skill={skill}/>
            </SkillCard.Root>
        </li>
    ))

    return (
        <ul
            className='skills__list window-frame'
            onClick={renderPanel}
            id='skills-list'
        >
            {skillCards}
        </ul>
    )
}

interface ISkillPanel extends ComponentProps<'dialog'> {
    skill?: Skill
    onHandleClick: MouseEventHandler<HTMLButtonElement>
}

function SkillPanel(props: ISkillPanel) {
    const {skill, onHandleClick} = props
    
    return skill !== undefined && (
        <Modal onHandleClick={onHandleClick}>
            <SkillModal skill={skill}/>
        </Modal>
    )
}

export const Skills = {
    Root,
    SkillsHeader,
    SkillsList,
    SkillPanel,
}
