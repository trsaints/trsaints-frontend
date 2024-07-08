import {createContext} from 'react'
import {IProjectsContext} from './IProjectsContext'

const ProjectsContext = createContext<IProjectsContext>({
    hideProject: () => {},
    closeOnEscape: () => {},
    loadProjects: () => {},
    searchProjects: () => {},
    selectProject: () => {}
})

export {ProjectsContext}