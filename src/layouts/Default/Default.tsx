import {PropsWithChildren, useContext} from 'react'
import {projectService, skillService, socialMediaService,} from '../../services'

import {About, Contact, Hero, Projects, Skills} from '../../pages'
import {MainContext} from '../../context/MainContext'
import {SkillsContextProvider} from '../../context/providers'
import {ProjectsContextProvider} from '../../context/providers/ProjectsContextProvider/ProjectsContextProvider'

function Root(props: PropsWithChildren) {
    const {children} = props

    return <main className='main'>{children}</main>
}

function SkillsSection() {
    const {skills}  = useContext(MainContext)
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
    const {projects}   = useContext(MainContext)
    const {projectId} = useContext(MainContext)

    const {search, sort} = useContext(MainContext)

    const projectsFound   = projectService.filterProjects(projects, search)
    const selectedProject = projectService.getProjectById(projects, projectId)

    return (
        <ProjectsContextProvider>
            <Projects.Root>
                <Projects.Header/>
                <Projects.Content baseProjectsLength={projects.length} projects={projectsFound}/>
                <Projects.ProjectPanel project={selectedProject}/>
            </Projects.Root>
        </ProjectsContextProvider>
    )
}

function Default() {
    const links = socialMediaService.getAllSocialLinks()

    return (
        <Root>
            <Hero/>
            <About links={links} srcPath={''}/>
            <SkillsSection/>
            <ProjectsSection/>
            <Contact/>
        </Root>
    )
}

export {Default}
