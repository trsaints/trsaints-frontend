import {ISkillCard} from './ISkillCard'
import './SkillCard.css'

function SkillCard(props: ISkillCard) {
    const {skill} = props

    return (
        <article className='skill-card'>
            <button className='skill-card__button'>
                <span className='sr-only'>Ver: </span>{skill?.title}
            </button>

            <dl className='skill-card__meta'>
                <dt className='sr-only'>categoria:</dt>

                <dd className='skill-card__value' lang='en'>{skill?.category} skill</dd>
            </dl>
        </article>
    )
}

export {SkillCard} 
