import {ISkillModalHeader} from './ISkillModalHeader'
import './SkillModalHeader.css'

function SkillModalHeader(props: ISkillModalHeader) {
    const {title, category} = props

    return (
        <header className='skill__header'>
            <h3 className='skill__title'>{title}</h3>

            <dl className='skill-meta'>
                <dt className='sr-only'>tipo:</dt>

                <dd className='skill-meta__value' lang='en'>
                    {category} skill
                </dd>
            </dl>
        </header>
    )
}

export {SkillModalHeader}