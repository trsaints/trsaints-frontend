import {FormEvent, PropsWithChildren, useContext} from 'react'
import {projectService, skillService, socialMediaService,} from '../../services'

import {About, Contact, Hero, Projects, Skills} from '../../pages'
import {MainContext} from '../../context/MainContext'
import {SkillsContextProvider} from '../../context/providers'

function Root(props: PropsWithChildren) {
    const {children} = props

    return <main className='main'>{children}</main>
}

function SkillsSection() {
    const {skills}   = useContext(MainContext)
    const {skillId} = useContext(MainContext)
    
    const selectedSkill = skillService.getSkillById(skills, skillId)

    return (
        <SkillsContextProvider>
            <Skills.Root>
                <Skills.SkillsHeader/>
                <Skills.SkillsList skills={skills}/>
                <Skills.SkillPanel skill={selectedSkill}/>
            </Skills.Root>
        </SkillsContextProvider>
    )
}

function ProjectsSection() {
    const {projects, setProjects}   = useContext(MainContext)
    const {projectId, setProjectId} = useContext(MainContext)

    const {search, setSearch} = useContext(MainContext)
    const {sort, setSort}     = useContext(MainContext)

    const projectsFound   = projectService.filterProjects(projects, search)
    const selectedProject = projectService.getProjectById(projects, projectId)

    const closeModal    = () => setProjectId(-1)
    const closeOnEscape = (e: KeyboardEvent) => e.key === 'Escape' && closeModal()

    const loadProjects = () => {
        if (projects.length === 0) setProjects(projectService.getPlaceholderProjects())
    }

    const searchProjects = (e: FormEvent) => {
        e.preventDefault()

        const searchParameters = new FormData(e.currentTarget as HTMLFormElement)
        const searchTerm       = searchParameters.get('search')?.toString()
        const sortTerm         = searchParameters.get('sort')?.toString()

        if (!searchTerm || !sortTerm) return

        setSearch(searchTerm)
        setSort(sortTerm)
    }

    const selectProject = (e: MouseEvent) => {
        const target = e?.target as HTMLElement

        if (target === null || target.dataset['Id'] === undefined) return

        const id = target.dataset['Id']

        setProjectId(Number(id))
    }

    const renderProject = () => {
        if (projectId > -1)
            return (
                <Projects.Project
                    project={selectedProject}
                    onHandleClick={closeModal}
                />
            )
    }

    return (
        <Projects.Root onHandleKeyDown={closeOnEscape}>
            <Projects.Header onHandleClick={loadProjects}/>
            <Projects.Content
                onHandleClick={selectProject}
                onHandleSubmit={searchProjects}
                baseProjectsLength={projects.length}
                projects={projectsFound}
            />
            {renderProject()}
        </Projects.Root>
    )
}

function Default() {
    const links = socialMediaService.getAllSocialLinks()

    return (
        <Root>
            <Hero/>
            <About links={links} srcPath={''}/>
            <SkillsSection/>
            <Contact/>
        </Root>
    )
}

export {Default}
