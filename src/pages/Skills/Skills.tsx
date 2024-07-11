import {useContext} from 'react'

import {SkillsContext} from '../../context/SkillsContext'
import {MainContext} from '../../context/MainContext'
import {SkillsContextProvider} from '../../context/providers'

import {SkillsList} from '../../components/SkillsList/SkillsList'
import {SkillsHeader} from '../../components/SkillsHeader'

import './Skills.css'

function Skills() {
    const {skills} = useContext(MainContext)

    return (
        <SkillsContextProvider>
            <SkillsContext.Consumer>
                {(
                    {
                        loadSkills,
                        selectSkill
                    }
                ) => (
                    <article className='skills' id='skills' onClick={selectSkill}>
                        <SkillsHeader onHandleClick={loadSkills}/>
                        <SkillsList skills={skills}/>
                    </article>
                )}
            </SkillsContext.Consumer>
        </SkillsContextProvider>
    )
}

export {Skills}

