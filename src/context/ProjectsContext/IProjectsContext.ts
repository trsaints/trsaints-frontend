import {FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react'

export interface IProjectsContext {
    hideProject: MouseEventHandler<HTMLButtonElement>
    closeOnEscape: KeyboardEventHandler<HTMLElement>
    loadProjects: MouseEventHandler<HTMLAnchorElement>
    searchProjects: FormEventHandler<HTMLFormElement>
    selectProject: MouseEventHandler<HTMLElement>
}