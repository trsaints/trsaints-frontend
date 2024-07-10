import {projectService} from '../../services'

import {useContext} from 'react'
import {ProjectsContextProvider} from '../../context/providers/ProjectsContextProvider'
import {MainContext} from '../../context/MainContext'
import {ProjectsContent} from '../../components/ProjectsContent'
import {ProjectsHeader} from '../../components/ProjectsHeader'

import './Projects.css'

function Projects() {
    const {projects, projectId, search} = useContext(MainContext)

    const projectsFound   = projectService.filterProjects(projects, search)
    const selectedProject = projectService.getProjectById(projects, projectId)

    return (
        <ProjectsContextProvider>
            <article className='projects' id='projects'>
                <ProjectsHeader/>
                <ProjectsContent baseProjectsLength={projects.length} projects={projectsFound}/>
            </article>
        </ProjectsContextProvider>
    )
}

export {Projects}
