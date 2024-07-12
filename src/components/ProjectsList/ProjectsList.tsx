import {intersectionService} from '../../services'

import {ProjectCard} from '../ProjectCard'

import {IProjectsList} from './IProjectsList'
import './ProjectsList.css'

function ProjectsList(props: IProjectsList) {
    const {projects} = props
    const ref        = intersectionService
        .useIntersectionObserver<HTMLHeadingElement>(
            1, (entry) => {
                setTimeout(() => {
                    intersectionService.addAnimation(entry, 'typed-out')
                }, 500)
            })

    const projectCards = projects.map((project) => (
        <li key={project?.uuid} data-id={project?.uuid}>
            <ProjectCard project={project} stack='[to be replaced]'/>
        </li>
    ))

    return (
        <article className='projects__result'>
            <h3 className='projects__count' aria-live='polite' ref={ref}>
                {projects.length} projetos encontrados
            </h3>

            <ul className='projects__list' id='projects-list'>
                {projectCards}
            </ul>
        </article>
    )
}

export {ProjectsList}