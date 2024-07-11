import {projectService} from '../../services'

import {ComponentProps, useContext} from 'react'
import {ProjectsContextProvider} from '../../context/providers/ProjectsContextProvider'
import {MainContext} from '../../context/MainContext'
import {ProjectsContent} from '../../components/ProjectsContent'
import {ProjectsHeader} from '../../components/ProjectsHeader'

import {ProjectsContext} from '../../context/ProjectsContext'

import './Projects.css'

function Root(props: ComponentProps<'article'>) {
    const {selectProject} = useContext(ProjectsContext)

    return (
        <article className='projects' id='projects' onClick={selectProject}>
            {props.children}
        </article>
    )
}

function Projects() {
    const {projects, search} = useContext(MainContext)

    const projectsFound = projectService.filterProjects(projects, search)

    return (
        <ProjectsContextProvider>
            <Root>
                <ProjectsHeader/>
                <ProjectsContent baseProjectsLength={projects.length} projects={projectsFound}/>
            </Root>
        </ProjectsContextProvider>
    )
}

export {Projects}
