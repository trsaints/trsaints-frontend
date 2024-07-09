import {projectService} from '../../services'

import {useContext} from 'react'
import {ProjectsContextProvider} from '../../context/providers/ProjectsContextProvider'
import {ProjectsContext} from '../../context/ProjectsContext'
import {MainContext} from '../../context/MainContext'

import {ProjectsPanel} from '../../components/ProjectsPanel'
import {ProjectsContent} from '../../components/ProjectsContent'
import {ProjectsHeader} from '../../components/ProjectsHeader'

import './Projects.css'

function Projects() {
    const {projects}  = useContext(MainContext)
    const {projectId} = useContext(MainContext)

    const {closeOnEscape} = useContext(ProjectsContext)
    const {search, sort}  = useContext(MainContext)

    const projectsFound   = projectService.filterProjects(projects, search)
    const selectedProject = projectService.getProjectById(projects, projectId)

    return (
        <ProjectsContextProvider>
            <article className='projects' id='projects' onKeyDown={closeOnEscape}>
                <ProjectsHeader/>
                <ProjectsContent baseProjectsLength={projects.length} projects={projectsFound}/>
                <ProjectsPanel project={selectedProject}/>
            </article>
        </ProjectsContextProvider>
    )
}

export {Projects}
