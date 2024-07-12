import {ComponentProps} from 'react'
import {Skill} from '../../entities'

export interface ISkillsList extends ComponentProps<'ul'> {
    skills: Skill[]
}
