import {ComponentProps} from 'react'
import {Project} from '../../entities'

export interface IProjectsPanelHeader extends ComponentProps<'header'> {
    title: string
    releaseDate: string
    stack: string[]
}

export interface IProjectsPanelStack extends ComponentProps<'ul'> {
    stack: string[]
}

export interface IProjectsPanelDate extends ComponentProps<'p'> {
    year: string
}

export interface IProjectsPanelDescription extends ComponentProps<'p'> {
    description: string
}

export interface IProjectsPanelLinks extends ComponentProps<'nav'> {
    title: string
    deployUrl?: string
    sourceUrl: string
}

export interface IProjectsPanelBanner extends ComponentProps<'figure'> {
    title: string
    bannerUrl: string
    bannerAlt: string
}

export interface IProjectsPanel extends ComponentProps<'article'> {
    project: Project
    stack: string[]
}
