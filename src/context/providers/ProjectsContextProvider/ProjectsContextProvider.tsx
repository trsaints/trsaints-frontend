import {ProjectsContext} from '../../ProjectsContext'
import {projectService} from '../../../services'
import React, {FormEvent, useContext} from 'react'
import {MainContext} from '../../MainContext'
import {IProjectsContext} from '../../ProjectsContext/IProjectsContext'
import {IProjectsContextProvider} from './IProjectsContextProvider'

function ProjectsContextProvider(props: IProjectsContextProvider) {
    const {children}                                      = props
    const {setProjects, setProjectId, setSearch, setSort} = useContext(MainContext)

    const hideProject   = () => setProjectId(-1)
    const closeOnEscape = (e: React.KeyboardEvent<HTMLElement>) => 
        e.key === 'Escape' && hideProject()
    const loadProjects  = () => setProjects(projectService.getPlaceholderProjects())

    const searchProjects = (e: FormEvent) => {
        e.preventDefault()

        const searchParameters = new FormData(e.currentTarget as HTMLFormElement)
        const searchTerm       = searchParameters.get('search')?.toString()
        const sortTerm         = searchParameters.get('sort')?.toString()

        if (!searchTerm || !sortTerm) return

        setSearch(searchTerm)
        setSort(sortTerm)
    }

    const selectProject = (e:  React.MouseEvent<HTMLElement>) => {
        const target = e?.target as HTMLElement

        if (target === null || target.dataset['Id'] === undefined) return

        const id = target.dataset['Id']

        setProjectId(Number(id))
    }

    const context: IProjectsContext = {
        hideProject,
        closeOnEscape,
        loadProjects,
        searchProjects,
        selectProject
    }
    
    return (<ProjectsContext.Provider value={context}>{children}</ProjectsContext.Provider>)
}

export {ProjectsContextProvider}