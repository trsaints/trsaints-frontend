import {ProjectsList} from '../ProjectsList'
import {ProjectFilter} from '../ProjectFilter'

import {IProjectsContent} from './IProjectsContent'
import './ProjectsContent.css'

function ProjectsContent(props: IProjectsContent) {
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
        >
            <h3 className='projects__subtitle sr-only'>portfolio</h3>

            {renderFilter()}
            {renderProjects()}
        </article>
    )
}

export {ProjectsContent}