import {ComponentProps} from 'react'
import {Skill} from '../../models'

export interface ISkillsList extends ComponentProps<'ul'> {
    skills: Skill[]
}
