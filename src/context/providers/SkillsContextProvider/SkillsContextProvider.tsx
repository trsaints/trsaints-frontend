import React, {useContext} from 'react'
import {skillService} from '../../../services'
import {SkillsContext} from '../../SkillsContext/SkillsContext'
import {MainContext} from '../../MainContext'

import {ISkillsContext} from '../../SkillsContext/ISkillsContext'
import {ISkillsContextProvider} from './ISkillsContextProvider'

function SkillsContextProvider(props: ISkillsContextProvider) {
    const {children}              = props
    const {setSkills, setSkillId} = useContext(MainContext)

    const loadSkills = () => setSkills(skillService.getPlaceholderSkills())

    const selectSkill   = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        const target = e.target as HTMLElement

        if (target === null) return

        const container = target.closest('[data-id]')
        const id        = container?.getAttribute('data-id')

        if (id === null) return

        setSkillId(Number(id))
    }
    const hideSkill     = () => setSkillId(-1)
    const closeOnEscape = (e: React.KeyboardEvent) => (e.key === 'Escape') && hideSkill()

    const context: ISkillsContext = {
        selectSkill,
        hideSkill,
        closeOnEscape,
        loadSkills
    }

    return (<SkillsContext.Provider value={context}>{children}</SkillsContext.Provider>)
}

export {SkillsContextProvider}