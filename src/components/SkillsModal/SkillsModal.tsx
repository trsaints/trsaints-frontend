import {ISkillsModal, ISkillModalContent, ISkillModalHeader} from './ISkillsModal'
import './SkillsModal.css'

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

function SkillModalContent(props: ISkillModalContent) {
    const {title, description, bannerAlt, bannerUrl} = props

    return (
        <>
            <p className='skill__desc'>{description}</p>

            <figure className='skill__banner'>
                <figcaption>{title}</figcaption>

                <img className='skill__img' src={bannerUrl} alt={bannerAlt}/>
            </figure>
        </>
    )
}

function SkillsModal(props: ISkillsModal) {
    const {skill} = props

    return (
        <article className='skill'>
            <SkillModalHeader {...skill}/>
            <SkillModalContent {...skill}/>
        </article>)
}

export {SkillsModal}