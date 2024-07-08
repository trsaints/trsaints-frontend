import {ComponentProps} from 'react'
import {Skill} from '../../models'

export interface ISkillModal extends ComponentProps<'article'> {
    skill: Skill
}
