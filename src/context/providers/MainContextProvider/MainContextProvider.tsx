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

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)

    const context: IMainContext = {
        projects,
        setProjects,
        projectId,
        setProjectId,
        skillId,
        setSkillId,
        skills,
        setSkills,
        search,
        setSearch,
        sort,
        setSort,
        isModalOpen,
        setIsModalOpen,
        modalContent,
        setModalContent
    }

    return (<MainContext.Provider value={context}>{children}</MainContext.Provider>)
}

export {MainContextProvider}