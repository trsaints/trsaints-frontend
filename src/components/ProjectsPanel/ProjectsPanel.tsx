import {faGlobe, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    IPanelBanner,
    IPanelDate,
    IPanelDescription,
    IPanelHeader,
    IPanelLinks,
    IPanelStack,
    IProjectsPanel
} from './IProjectsPanel'
import './ProjectsPanel.css'

function Header(props: IPanelHeader) {
    const {title, releaseDate, stack} = props

    return (<header className='project__header'>
        <h3 className='project__title'>{title}</h3>

        <DateDisplay year={releaseDate}/>
        <Stack stack={stack}/>
    </header>)
}

function Stack(props: IPanelStack) {
    const {stack} = props

    const stacks = stack.map((tech, index) => (<li className='project__tech' key={`${tech}-${index}`}>
        {tech}
    </li>))

    return <ul className='project__stacks'>{stacks}</ul>
}

function DateDisplay(props: IPanelDate) {
    const {year} = props

    return (<p className='project__date'>
            <span className='sr-only' lang='en'>
                lançado em:
            </span>

        <time dateTime={year}>{year}</time>
    </p>)
}

function Desc(props: IPanelDescription) {
    const {description} = props

    return <p className='project__desc'>{description}</p>
}

function Links(props: IPanelLinks) {
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

function Banner(props: IPanelBanner) {
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
            <Header
                title={project.title}
                releaseDate={project.releaseDate.toDateString()}
                stack={stack}
            />

            <Banner {...project}/>
            <Desc {...project}/>
            <Links{...project}/>
        </article>
    )
}

export {ProjectsPanel}
