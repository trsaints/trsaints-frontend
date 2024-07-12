import {createContext} from 'react'
import {IMainContext} from './IMainContext'

const MainContext = createContext<IMainContext>({
    projects: [],
    projectId: -1,
    skills: [],
    skillId: -1,
    search: '',
    sort: '',
    isModalOpen: false,
    modalContent: null,
    setProjects: () => {},
    setProjectId: () => {},
    setSkills: () => {},
    setSkillId: () => {},
    setSearch: () => {},
    setSort: () => {},
    setIsModalOpen: () => {},
    setModalContent: () => {}
})

export {MainContext}