import React, {FormEvent, useContext} from 'react'
import {projectService} from '../../../services'

import {ProjectsPanel} from '../../../components'

import {MainContext} from '../../MainContext'
import {IProjectsContext, ProjectsContext} from '../../ProjectsContext'
import {IProjectsContextProvider} from './IProjectsContextProvider'

function ProjectsContextProvider(props: IProjectsContextProvider) {
    const {children} = props

    const {
              setProjects,
              setProjectId,
              setSkillId,
              setSearch,
              setSort,
              setIsModalOpen,
              setModalContent
          } = useContext(MainContext)

    const {projects} = useContext(MainContext)

    const loadProjects = () => setProjects(projectService.getPlaceholderProjects())

    const searchProjects = (e: FormEvent) => {
        e.preventDefault()

        const searchParameters = new FormData(e.currentTarget as HTMLFormElement)
        const searchTerm       = searchParameters.get('search')?.toString()
        const sortTerm         = searchParameters.get('sort')?.toString()
        
        if (!searchTerm) {
            setSearch('')
            return
        }

        setSearch(searchTerm)
        setSort(sortTerm!)
    }

    const selectProject = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        const target = e.target as HTMLElement

        if (target === null) return

        const container = target.closest('[data-id]')
        const id        = container?.getAttribute('data-id')

        if (id === null) return

        setProjectId(Number(id))
        setSkillId(-1)

        const selectedProject = projectService.getProjectById(projects, Number(id))

        if (!selectedProject) return

        setIsModalOpen(true)
        setModalContent(<ProjectsPanel project={selectedProject} stack={['to be replaced']}/>)
    }

    const context: IProjectsContext = {
        loadProjects,
        searchProjects,
        selectProject
    }

    return (<ProjectsContext.Provider value={context}>{children}</ProjectsContext.Provider>)
}

export {ProjectsContextProvider}