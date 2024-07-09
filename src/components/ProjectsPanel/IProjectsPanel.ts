import {ComponentProps} from 'react'
import {Project} from '../../models'
export interface IProjectsPanel extends ComponentProps<'dialog'> {
    project?: Project
}
