import {createContext} from 'react'
import {ISkillsContext} from './ISkillsContext'

const SkillsContext = createContext<ISkillsContext>({
        selectSkill: () => {},
        loadSkills: () => {}
})

export {SkillsContext}