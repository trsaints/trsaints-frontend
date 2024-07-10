import {MouseEventHandler} from 'react'

export interface ISkillsContext {
    selectSkill: MouseEventHandler<HTMLUListElement>
    loadSkills: MouseEventHandler<HTMLAnchorElement>
}