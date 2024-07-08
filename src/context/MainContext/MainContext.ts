import {createContext} from 'react'
import {IMainContext} from './IMainContext'

const MainContext = createContext<IMainContext>({
    projects: [],
    setProjects: () => {},
    projectId: -1,
    setProjectId: () => {},
    skills: [],
    setSkills: () => {},
    skillId: -1,
    setSkillId: () => {},
    search: '',
    setSearch: () => {},
    sort: '',
    setSort: () => {}
})

export {MainContext}