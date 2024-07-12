import {Project} from '../../entities'
import {ComponentProps} from 'react'

export interface IProjectCard extends ComponentProps<'article'> {
    project: Project
    stack: string
}