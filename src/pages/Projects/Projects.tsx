import {ProjectsContextProvider} from '../../context/providers/ProjectsContextProvider'
import {ProjectsContext} from '../../context/ProjectsContext'
import {ComponentProps, useContext} from 'react'
import {Project} from '../../models'
import {MainContext} from '../../context/MainContext'
import {projectService} from '../../services'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

import {Modal, ProjectCard, ProjectFilter, ProjectModal} from '../../components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Projects.css'

function Header() {
    const {loadProjects} = useContext(ProjectsContext)
    return (
        <header className='projects__header'>
            <h2 className='projects__title'>
                meus projetos
            </h2>

            <p className='projects__desc'>
                Atualmente, meus projetos consistem, principalmente, em programação Web
                e automação. Quer vê-los? Clique no botão abaixo.
            </p>

            <a
                href='#projects-content'
                className='projects__button highlight-btn'
                onClick={loadProjects}
            >
                ver projetos
                <FontAwesomeIcon className='suffix-icon' icon={faArrowDown}/>
            </a>
        </header>
    )
}

interface IProjectsList extends ComponentProps<'ul'> {
    projects: Project[]
}

function ProjectsList(props: IProjectsList) {
    const {projects} = props

    const projectCards = projects.map((project) => (
        <li key={project?.uuid} data-id={project?.uuid}>
            <ProjectCard project={project} stack='[to be replaced]'/>
        </li>
    ))

    return (
        <article className='projects__result'>
            <h3 className='projects__count' aria-live='polite'>
                {projects.length} projetos encontrados
            </h3>

            <ul className='projects__list' id='projects-list'>
                {projectCards}
            </ul>
        </article>
    )
}

interface IContent extends ComponentProps<'article'> {
    baseProjectsLength: number
    projects: Project[]
}

function Content(props: IContent) {
    const {selectProject}                = useContext(ProjectsContext)
    const {projects, baseProjectsLength} = props

    const hasProjectsFound  = projects.length > 0,
          hasProjectsLoaded = baseProjectsLength > 0

    const renderFilter = () => {
        if (hasProjectsLoaded)
            return <Filter/>
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

function Filter() {
    const {searchProjects} = useContext(ProjectsContext)

    return (
        <ProjectFilter.Root onHandleSubmit={searchProjects}>
            <ProjectFilter.Select options={['nome', 'data']}/>
            <ProjectFilter.SearchBar/>
        </ProjectFilter.Root>
    )
}

interface IProjectPanel extends ComponentProps<'dialog'> {
    project?: Project
}

function ProjectPanel(props: IProjectPanel) {
    const {hideProject} = useContext(ProjectsContext)
    const {project}     = props

    return (project !== undefined) && (
        <Modal onHandleClick={hideProject}>
            <ProjectModal
                project={project}
                releaseDate={project.releaseDate.toDateString()}
                stack={['to be replaced']}/>
        </Modal>
    )
}

function Projects() {
    const {projects}  = useContext(MainContext)
    const {projectId} = useContext(MainContext)

    const {closeOnEscape} = useContext(ProjectsContext)
    const {search, sort} = useContext(MainContext)

    const projectsFound   = projectService.filterProjects(projects, search)
    const selectedProject = projectService.getProjectById(projects, projectId)

    return (
        <ProjectsContextProvider>
            <article className='projects' id='projects' onKeyDown={closeOnEscape}>
                <Header/>
                <Content baseProjectsLength={projects.length} projects={projectsFound}/>
                <ProjectPanel project={selectedProject}/>
            </article>
        </ProjectsContextProvider>
    )
}

export {Projects}
