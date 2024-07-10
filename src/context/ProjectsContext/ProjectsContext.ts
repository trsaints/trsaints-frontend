import {createContext} from 'react'
import {IProjectsContext} from './IProjectsContext'

const ProjectsContext = createContext<IProjectsContext>({
    loadProjects: () => {},
    searchProjects: () => {},
    selectProject: () => {}
})

export {ProjectsContext}