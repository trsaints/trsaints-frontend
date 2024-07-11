import {ComponentProps, PropsWithChildren} from 'react'
import {Skill} from '../../models'

export interface ISkillModalHeader extends ComponentProps<'header'> {
    title: string
    category: string
}

export interface ISkillModalContent extends PropsWithChildren {
    title: string
    description: string
    bannerUrl: string
    bannerAlt: string
}

export interface ISkillsPanel extends ComponentProps<'article'> {
    skill: Skill
}

