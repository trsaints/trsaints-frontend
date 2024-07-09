import {ComponentProps} from 'react'
import {Project} from '../../models'

export interface IProjectsList extends ComponentProps<'ul'> {
    projects: Project[]
}