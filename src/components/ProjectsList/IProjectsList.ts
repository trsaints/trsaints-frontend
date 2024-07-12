import {ComponentProps} from 'react'
import {Project} from '../../entities'

export interface IProjectsList extends ComponentProps<'ul'> {
    projects: Project[]
}