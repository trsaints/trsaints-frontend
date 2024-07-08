import {KeyboardEventHandler, MouseEventHandler} from 'react'

export interface ISkillsContext {
    selectSkill: MouseEventHandler<HTMLUListElement>
    hideSkill: MouseEventHandler<HTMLButtonElement>
    closeOnEscape: KeyboardEventHandler<HTMLElement>
    loadSkills: MouseEventHandler<HTMLAnchorElement>
}