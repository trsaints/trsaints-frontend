import {projectService} from '../../services'

import {useContext} from 'react'
import {ProjectsContextProvider} from '../../context/providers/ProjectsContextProvider'
import {MainContext} from '../../context/MainContext'
import {ProjectsContext} from '../../context/ProjectsContext'

import {ProjectFilter, ProjectsHeader, ProjectsList} from '../../components'

import './Projects.css'

function Projects() {
    const {projects, search} = useContext(MainContext)
    const projectsFound      = projectService.filterProjects(projects, search)

    const hasProjectsFound  = projectsFound.length > 0,
          hasProjectsLoaded = projects.length > 0

    return (
        <ProjectsContextProvider>
            <ProjectsContext.Consumer>
                {
                    ({
                        selectProject,
                        loadProjects,
                        searchProjects
                    }) => (
                        <article className='projects' id='projects' onClick={selectProject}>
                            <ProjectsHeader onHandleClick={loadProjects}/>

                            <article className='projects__content' id='projects-content'>
                                {hasProjectsLoaded && <ProjectFilter onHandleSubmit={searchProjects}/>}
                                {hasProjectsFound && <ProjectsList projects={projectsFound}/>}
                            </article>
                        </article>
                    )
                }
            </ProjectsContext.Consumer>
        </ProjectsContextProvider>
    )
}

export {Projects}
