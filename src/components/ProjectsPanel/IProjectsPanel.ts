import {ComponentProps} from 'react'
import {Project} from '../../models'

export interface IPanelHeader extends ComponentProps<'header'> {
    title: string
    releaseDate: string
    stack: string[]
}

export interface IPanelStack extends ComponentProps<'ul'> {
    stack: string[]
}

export interface IPanelDate extends ComponentProps<'p'> {
    year: string
}

export interface IPanelDescription extends ComponentProps<'p'> {
    description: string
}

export interface IPanelLinks extends ComponentProps<'nav'> {
    title: string
    deployUrl?: string
    sourceUrl: string
}

export interface IPanelBanner extends ComponentProps<'figure'> {
    title: string
    bannerUrl: string
    bannerAlt: string
}

export interface IProjectsPanel extends ComponentProps<'article'> {
    project: Project
    stack: string[]
}
