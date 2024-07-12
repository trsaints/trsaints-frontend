import {ComponentProps} from 'react'
import {Skill} from '../../entities'

export interface ISkillCard extends ComponentProps<'article'> {
    skill: Skill
}