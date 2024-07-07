import {Project} from '../models'

function getPlaceholderProjects(): Project[] {
    return [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description 1',
            releaseDate: new Date(),
            skillsIds: [1, 2, 3],
            bannerUrl: 'https://via.placeholder.com/150',
            bannerAlt: 'Project 1',
            sourceUrl: 'https://github.com'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description 2',
            releaseDate: new Date(),
            skillsIds: [4, 5, 6],
            bannerUrl: 'https://via.placeholder.com/150',
            bannerAlt: 'Project 2',
            sourceUrl: 'https://github.com'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Description 3',
            releaseDate: new Date(),
            skillsIds: [7, 8, 9],
            bannerUrl: 'https://via.placeholder.com/150',
            bannerAlt: 'Project 3',
            sourceUrl: 'https://github.com'
        }
    ]
}

function filterProjects(projects: Project[], search: string) {
    return projects.filter((project) => projectTitleHas(project, search))
}

function getProjectById(projects: Project[], id: number) {
    return projects.find(project => project.id === id)
}

function projectTitleHas(project: Project, search: string) {
    return project.title.toLowerCase().includes(search.toLowerCase())
}

export const projectService = {
    filterProjects,
    getPlaceholderProjects,
    getProjectById,
    projectTitleHas
}