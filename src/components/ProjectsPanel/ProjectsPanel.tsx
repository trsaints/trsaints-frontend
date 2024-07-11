import {faGlobe, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'
import './ProjectsPanel.css'
import {ComponentProps} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Project} from '../../models'

interface IHeaderProps extends ComponentProps<'header'> {
    title: string
    releaseDate: string
    stack: string[]
}

function Header(props: IHeaderProps) {
    const {title, releaseDate, stack} = props

    return (<header className='project__header'>
        <h3 className='project__title'>{title}</h3>

        <DateDisplay year={releaseDate}/>
        <Stacks stack={['[to be replaced]']}/>
    </header>)
}

interface IStacks extends ComponentProps<'ul'> {
    stack: string[]
}

function Stacks(props: IStacks) {
    const {stack} = props

    const stacks = stack.map((tech, index) => (<li className='project__tech' key={`${tech}-${index}`}>
        {tech}
    </li>))

    return <ul className='project__stacks'>{stacks}</ul>
}

interface IDateDisplay extends ComponentProps<'p'> {
    year: string
}

function DateDisplay(props: IDateDisplay) {
    const {year} = props

    return (<p className='project__date'>
            <span className='sr-only' lang='en'>
                lançado em:
            </span>

        <time dateTime={year}>{year}</time>
    </p>)
}

interface IDescription extends ComponentProps<'p'> {
    description: string
}

function Desc(props: IDescription) {
    const {description} = props

    return <p className='project__desc'>{description}</p>
}

interface ILinks extends ComponentProps<'nav'> {
    title: string
    deployUrl?: string
    sourceUrl: string
}

function Links(props: ILinks) {
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

interface IBanner extends ComponentProps<'figure'> {
    title: string
    bannerUrl: string
    bannerAlt: string
}

function Banner(props: IBanner) {
    const {title, bannerUrl, bannerAlt} = props

    return (<figure className='project__figure'>
        <figcaption className='project__figcaption'>{title}</figcaption>

        <img className='project__img' src={bannerUrl} alt={bannerAlt}/>
    </figure>)
}

interface IProjectModal extends ComponentProps<'article'> {
    project: Project
    stack: string[]
}

function ProjectsPanel(props: IProjectModal) {
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
