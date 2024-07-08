import './ProjectCard.css'
import {IProjectCard} from './IProjectCard'
import {MetaStack} from '../MetaStack'
import {MetaDeploy} from '../MetaDeploy'

function ProjectCard(props: IProjectCard) {
    const {stack, project} = props

    return (
        <article className='project-card'>
            <h3 className='project-card__title'>{project.title}</h3>

            <MetaStack stack={stack}/>
            <MetaDeploy deployUrl={project.deployUrl}/>

            <button className='sr-only' type='button'>ver projeto: {project.title}</button>
        </article>
    )
}

export {ProjectCard}