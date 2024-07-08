import {Project} from '../../models'
import {ComponentProps} from 'react'

export interface IProjectCard extends ComponentProps<'article'> {
    project: Project
    stack: string
}