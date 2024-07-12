import {Project, Skill} from '../../entities'
import {Dispatch, ReactNode, SetStateAction} from 'react'

export interface IMainContext {
    projects: Project[]
    projectId: number
    skills: Skill[]
    skillId: number
    search: string
    sort: string
    isModalOpen: boolean
    modalContent: ReactNode

    setProjects: Dispatch<SetStateAction<Project[]>>
    setProjectId: Dispatch<SetStateAction<number>>
    setSkills: Dispatch<SetStateAction<Skill[]>>
    setSkillId: Dispatch<SetStateAction<number>>
    setSearch: Dispatch<SetStateAction<string>>
    setSort: Dispatch<SetStateAction<string>>
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    setModalContent: Dispatch<SetStateAction<ReactNode>>
}