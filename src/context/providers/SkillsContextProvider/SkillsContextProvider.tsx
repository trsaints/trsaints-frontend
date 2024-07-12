import React, {useContext} from 'react'
import {skillService} from '../../../services'

import {SkillsPanel} from '../../../components'

import {MainContext} from '../../MainContext'
import {ISkillsContext, SkillsContext} from '../../SkillsContext'
import {ISkillsContextProvider} from './ISkillsContextProvider'

function SkillsContextProvider(props: ISkillsContextProvider) {
    const {children} = props

    const {skills} = useContext(MainContext)
    const {
              setSkills,
              setSkillId,
              setProjectId,
              setIsModalOpen,
              setModalContent
          }        = useContext(MainContext)

    const loadSkills = () => setSkills(skillService.getPlaceholderSkills())

    const selectSkill = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        const target = e.target as HTMLElement

        if (target === null) return

        const container = target.closest('[data-id]')
        const id        = container?.getAttribute('data-id')

        if (id === null) return

        setSkillId(Number(id))
        setProjectId(-1)

        const selectedSkill = skillService.getSkillById(skills, Number(id))

        if (!selectedSkill) return

        setIsModalOpen(true)
        setModalContent(<SkillsPanel skill={selectedSkill}/>)
    }

    const context: ISkillsContext = {
        selectSkill,
        loadSkills
    }

    return (<SkillsContext.Provider value={context}>{children}</SkillsContext.Provider>)
}

export {SkillsContextProvider}