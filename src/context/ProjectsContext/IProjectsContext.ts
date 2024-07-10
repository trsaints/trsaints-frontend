import {FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react'

export interface IProjectsContext {
    loadProjects: MouseEventHandler<HTMLAnchorElement>
    searchProjects: FormEventHandler<HTMLFormElement>
    selectProject: MouseEventHandler<HTMLElement>
}