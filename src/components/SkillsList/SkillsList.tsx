import './SkillsList.css'
import {SkillCard} from '../SkillCard'
import {ISkillsList} from './ISkillsList'

function SkillsList(props: ISkillsList) {
    const {skills} = props

    const skillCards = skills.map((skill) => (
        <li key={skill?.uuid} data-id={skill?.uuid}>
            <SkillCard skill={skill} />
        </li>
    ))

    return (skills.length > 0)
        && (
            <ul className='skills__list window-frame' id='skills-list'>
                {skillCards}
            </ul>
        )
}

export {SkillsList}