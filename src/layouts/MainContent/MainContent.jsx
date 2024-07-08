import {useState} from "react";
import {projectService, skillService, socialMediaService,} from "../../services";

import {About, Contact, Hero, Projects, Skills} from "../../pages";

function Root({children}) {
    return <main className="main">{children}</main>;
}

function SkillsSection() {
    const [skills, setSkills] = useState([]),
        [index, setIndex] = useState(-1);

    const loadSkills = () => setSkills(skillService.getAllSkills());

    const selectSkill = (e) => {
        const parentID = e?.target.closest("[data-id]");

        if (parentID === null) return;

        const {id} = parentID.dataset;

        setIndex(id);
    };

    const renderSkill = () => {
        if (index > -1)
            return <Skills.Skill skill={skills[index]} onHandleClick={closeModal}/>;
    };

    const closeModal = () => setIndex(-1);
    const closeOnEscape = (e) => e.key === "Escape" && closeModal();

    return (
        <Skills.Root onHandleKeyDown={closeOnEscape}>
            <Skills.Header onHandleClick={loadSkills}/>
            {skills.length > 0 && (
                <Skills.SkillsList skills={skills} onHandleClick={selectSkill}/>
            )}
            {renderSkill()}
        </Skills.Root>
    );
}

function ProjectsSection() {
    const [projects, setProjects] = useState([]),
        [index, setIndex] = useState(-1),
        [search, setSearch] = useState(""),
        [sort, setSort] = useState("");

    const projectsFound = projectService.filterProjects(projects, search);

    const closeModal = () => setIndex(-1);
    const closeOnEscape = (e) => e.key === "Escape" && closeModal();

    const loadProjects = () => {
        if (projects.length === 0) setProjects(projectService.getAllProjects());
    };

    const searchProjects = (e) => {
        e.preventDefault();

        setSearch(e.target.elements["search"].value);
        setSort(e.target.elements["sort"].value);
    };

    const selectProject = (e) => {
        const parentID = e?.target.closest("[data-id]");

        if (parentID === null) return;

        const {id} = parentID.dataset;

        setIndex(id);
    };

    const renderProject = () => {
        if (index > -1)
            return (
                <Projects.Project
                    project={projectsFound[index]}
                    onHandleClick={closeModal}
                />
            );
    };

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
    );
}

function MainContent() {
    const links = socialMediaService.getAllSocialLinks();

    return (
        <Root>
            <Hero/>
            <About links={links}/>
            <SkillsSection/>
            <ProjectsSection/>
            <Contact/>
        </Root>
    )
}

export {MainContent}
