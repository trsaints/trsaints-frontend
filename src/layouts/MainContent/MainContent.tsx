import {FormEvent, PropsWithChildren, useContext} from 'react'
import {projectService, skillService, socialMediaService,} from '../../services'

import {About, Contact, Hero, Projects, Skills} from '../../pages'
import {MainContext} from '../../context/MainContext'

function Root(props: PropsWithChildren) {
    const {children} = props

    return <main className='main'>{children}</main>
}

function SkillsSection() {
    const {skills, setSkills}   = useContext(MainContext)
    const {skillId, setSkillId} = useContext(MainContext)
    const selectedSkill         = skillService.getSkillById(skills, skillId)

    const loadSkills = () => setSkills(skillService.getPlaceholderSkills())

    const selectSkill = (e: MouseEvent) => {
        const target = e?.target as HTMLElement

        if (target === null) return
        
        const container = target?.closest('[data-id]')
        const id = container?.getAttribute('data-id')
        
        if (id === null) return
        
        setSkillId(Number(id))
    }

    const renderSkill = () => {
        if (skillId !== -1)
            return <Skills.Skill skill={selectedSkill} onHandleClick={closeModal}/>
    }

    const closeModal    = () => setSkillId(-1)
    const closeOnEscape = (e: KeyboardEvent) => e.key === 'Escape' && closeModal()

    return (
        <Skills.Root onHandleKeyDown={closeOnEscape}>
            {skills.length > 0 &&
                (
                    <>
                        <Skills.Header onHandleClick={loadSkills}/>
                        <Skills.SkillsList skills={skills} onHandleClick={selectSkill}/>
                    </>
                )
            }
            {renderSkill()}
        </Skills.Root>
    )
}

function ProjectsSection() {
    const {projects, setProjects}   = useContext(MainContext)
    const {projectId, setProjectId} = useContext(MainContext)

    const {search, setSearch} = useContext(MainContext)
    const {sort, setSort} = useContext(MainContext)
    
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
        const searchTerm = searchParameters.get('search')?.toString()
        const sortTerm = searchParameters.get('sort')?.toString()
        
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

function MainContent() {
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

export {MainContent}
