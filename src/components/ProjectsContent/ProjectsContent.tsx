import {useContext} from 'react'
import {ProjectsContext} from '../../context/ProjectsContext'

import {ProjectsList} from '../ProjectsList'
import {ProjectFilter} from '../ProjectFilter'

import {IProjectsContent} from './IProjectsContent'
import './ProjectsContent.css'

function ProjectsContent(props: IProjectsContent) {
    const {selectProject}                = useContext(ProjectsContext)
    const {projects, baseProjectsLength} = props

    const hasProjectsFound  = projects.length > 0,
          hasProjectsLoaded = baseProjectsLength > 0

    const renderFilter = () => {
        if (hasProjectsLoaded)
            return <ProjectFilter/>
    }

    const renderProjects = () => {
        if (hasProjectsFound) return <ProjectsList projects={props?.projects}/>
    }

    return (
        <article
            id='projects-content'
            className='projects__content'
            onClick={selectProject}
        >
            <h3 className='projects__subtitle sr-only'>portfolio</h3>

            {renderFilter()}
            {renderProjects()}
        </article>
    )
}

export {ProjectsContent}