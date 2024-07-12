import {ComponentProps, PropsWithChildren} from 'react'
import {Skill} from '../../entities'

export interface ISkillsPanelHeader extends ComponentProps<'header'> {
    title: string
    category: string
}

export interface ISkillsPanelContent extends PropsWithChildren {
    title: string
    description: string
    bannerUrl: string
    bannerAlt: string
}

export interface ISkillsPanel extends ComponentProps<'article'> {
    skill: Skill
}

