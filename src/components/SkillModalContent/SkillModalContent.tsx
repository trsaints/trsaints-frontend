import {ISkillModalContent} from './ISkillModalContent'
import './SkillModalContent.css'

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

export {SkillModalContent}