import {ISkillsPanel, ISkillsPanelContent, ISkillsPanelHeader} from './ISkillsPanel'
import './SkillsPanel.css'

function SkillsPanelHeader(props: ISkillsPanelHeader) {
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

function SkillsPanelContent(props: ISkillsPanelContent) {
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

function SkillsPanel(props: ISkillsPanel) {
    const {skill} = props

    return (
        <article className='skill'>
            <SkillsPanelHeader {...skill}/>
            <SkillsPanelContent {...skill}/>
        </article>)
}

export {SkillsPanel}