import {MainContext} from '../../MainContext/MainContext'
import {useState} from 'react'
import {IMainContextProvider} from './IMainContextProvider'
import {Project, Skill} from '../../../models'
import {IMainContext} from '../../MainContext/IMainContext'

function MainContextProvider(props: IMainContextProvider) {
    const {children} = props

    const [projects, setProjects]   = useState<Project[]>([])
    const [projectId, setProjectId] = useState<number>(-1)

    const [skillId, setSkillId] = useState<number>(-1)
    const [skills, setSkills]   = useState<Skill[]>([])

    const [search, setSearch] = useState<string>('')
    const [sort, setSort]     = useState<string>('')

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
        setSort
    }

    return (<MainContext.Provider value={context}>{children}</MainContext.Provider>)
}

export {MainContextProvider}