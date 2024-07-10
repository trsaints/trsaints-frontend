import React, {useState} from 'react'
import {Project, Skill} from '../../../models'
import {MainContext} from '../../MainContext'
import {IMainContext} from '../../MainContext/IMainContext'

import {IMainContextProvider} from './IMainContextProvider'

function MainContextProvider(props: IMainContextProvider) {
    const {children} = props

    const [projects, setProjects]   = useState<Project[]>([])
    const [projectId, setProjectId] = useState<number>(-1)

    const [skillId, setSkillId] = useState<number>(-1)
    const [skills, setSkills]   = useState<Skill[]>([])

    const [search, setSearch] = useState<string>('')
    const [sort, setSort]     = useState<string>('')

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)

    const context: IMainContext = {
        projects,
        projectId,
        skillId,
        skills,
        search,
        sort,
        isModalOpen,
        modalContent,
        setProjects,
        setProjectId,
        setSkillId,
        setSkills,
        setSearch,
        setSort,
        setIsModalOpen,
        setModalContent
    }

    return (<MainContext.Provider value={context}>{children}</MainContext.Provider>)
}

export {MainContextProvider}