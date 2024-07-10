import {Project, Skill} from '../../models'
import React, {Dispatch, SetStateAction} from 'react'

export interface IMainContext {
    projects: Project[]
    setProjects: Dispatch<SetStateAction<Project[]>>
    projectId: number
    setProjectId: Dispatch<SetStateAction<number>>
    skills: Skill[]
    setSkills: Dispatch<SetStateAction<Skill[]>>
    skillId: number
    setSkillId: Dispatch<SetStateAction<number>>
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    sort: string
    setSort: Dispatch<SetStateAction<string>>
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    modalContent: React.ReactNode
    setModalContent: Dispatch<SetStateAction<React.ReactNode>>
}