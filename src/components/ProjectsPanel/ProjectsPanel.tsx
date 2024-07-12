import {faGlobe, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    IProjectsPanelBanner,
    IProjectsPanelDate,
    IProjectsPanelDescription,
    IProjectsPanelHeader,
    IProjectsPanelLinks,
    IProjectsPanelStack,
    IProjectsPanel
} from './IProjectsPanel'
import './ProjectsPanel.css'

function ProjectsPanelHeader(props: IProjectsPanelHeader) {
    const {title, releaseDate, stack} = props

    return (<header className='project__header'>
        <h3 className='project__title'>{title}</h3>

        <ProjectsPanelDate year={releaseDate}/>
        <ProjectsPanelStack stack={stack}/>
    </header>)
}

function ProjectsPanelStack(props: IProjectsPanelStack) {
    const {stack} = props

    const stacks = stack.map((tech, index) => (<li className='project__tech' key={`${tech}-${index}`}>
        {tech}
    </li>))

    return <ul className='project__stacks'>{stacks}</ul>
}

function ProjectsPanelDate(props: IProjectsPanelDate) {
    const {year} = props

    return (<p className='project__date'>
            <span className='sr-only' lang='en'>
                lançado em:
            </span>

        <time dateTime={year}>{year}</time>
    </p>)
}

function ProjectsPanelDescription(props: IProjectsPanelDescription) {
    const {description} = props

    return <p className='project__desc'>{description}</p>
}

function ProjectsPanelLinks(props: IProjectsPanelLinks) {
    const {title, deployUrl, sourceUrl} = props

    return (<nav className='project__links'>
        <a
            className='highlight-btn'
            href={deployUrl}
            target='_blank'
            rel='noopener noreferrer'
        >
            ver deploy <span className='sr-only'>do projeto {title}</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} className='suffix-icon'/>
        </a>

        <a
            className='link-btn'
            href={sourceUrl}
            target='_blank'
            rel='noopener noreferrer'
        >
            ver código fonte <span className='sr-only'>do projeto {title}</span>
            <FontAwesomeIcon icon={faGlobe} className='suffix-icon'/>
        </a>
    </nav>)
}

function Banner(props: IProjectsPanelBanner) {
    const {title, bannerUrl, bannerAlt} = props

    return (<figure className='project__figure'>
        <figcaption className='project__figcaption'>{title}</figcaption>

        <img className='project__img' src={bannerUrl} alt={bannerAlt}/>
    </figure>)
}

function ProjectsPanel(props: IProjectsPanel) {
    const {project, stack} = props

    return (
        <article className='project'>
            <ProjectsPanelHeader
                title={project.title}
                releaseDate={project.releaseDate.toDateString()}
                stack={stack}
            />

            <Banner {...project}/>
            <ProjectsPanelDescription {...project}/>
            <ProjectsPanelLinks{...project}/>
        </article>
    )
}

export {ProjectsPanel}
