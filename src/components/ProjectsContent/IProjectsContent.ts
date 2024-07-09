import {ComponentProps} from 'react'
import {Project} from '../../models'

export interface IProjectsContent extends ComponentProps<'article'> {
    baseProjectsLength: number
    projects: Project[]
}