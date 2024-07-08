import {createContext} from 'react'
import {ISkillsContext} from './ISkillsContext'

const SkillsContext = createContext<ISkillsContext>({
        selectSkill: () => {},
        hideSkill: () => {},
        closeOnEscape: () => {},
        loadSkills: () => {}
})

export {SkillsContext}