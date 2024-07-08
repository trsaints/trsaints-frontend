import {SkillModalHeader} from '../SkillModalHeader'
import {SkillModalContent} from '../SkillModalContent'

import {ISkillModal} from './ISkillModal'
import './SkillModal.css'

function SkillModal(props: ISkillModal) {
    const {skill} = props

    return (
        <article className='skill'>
            <SkillModalHeader {...skill}/>
            <SkillModalContent {...skill}/>
        </article>)
}

export {SkillModal}