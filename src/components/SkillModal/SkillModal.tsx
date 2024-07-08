import './SkillModal.css'
import {ComponentProps, PropsWithChildren} from 'react'
import {Skill} from '../../models'

interface IHeader extends PropsWithChildren {
    skill: Skill
}

function Header(props: IHeader) {
    const {skill} = props
    
    return (
        <header className='skill__header'>
            <h3 className='skill__title'>{skill.title}</h3>

            <dl className='skill-meta'>
                <dt className='sr-only'>tipo:</dt>

                <dd className='skill-meta__value' lang='en'>
                    {skill.category}
                </dd>
            </dl>
        </header>
    )
}

interface IContent extends PropsWithChildren {
    skill: Skill    
}

function Content(props: IContent) {
    const {skill} = props
    
    return (
        <>
            <p className='skill__desc'>{skill.description}</p>

            <figure className='skill__banner'>
                <figcaption>{skill.title}</figcaption>

                <img className='skill__img' src={skill.bannerUrl} alt={skill.bannerAlt}/>
            </figure>
        </>
    )
}

interface ISkillModal extends ComponentProps<'article'> {
    skill: Skill
}

function SkillModal(props: ISkillModal) {
    const {skill} = props
    
    return (
        <article className='skill'>
            <Header skill={skill}/>
            <Content skill={skill}/>
        </article>)
}

export {SkillModal}