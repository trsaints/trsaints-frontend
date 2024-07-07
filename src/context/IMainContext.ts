import {Project, Skill} from '../models'
import {Dispatch, SetStateAction} from 'react'

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
}