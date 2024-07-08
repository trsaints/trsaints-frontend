import './SkillCard.css'

function Root({children}) {
    return <article className='skill-card'>{children}</article>
}

function Content({skill}) {
    return (
        <>
            <button className='skill-card__button'><span className='sr-only'>Ver: </span>{skill?.title}</button>

            <dl className='skill-card__meta'>
                <dt className='sr-only' lang='en'>skill type:</dt>

                <dd className='skill-card__value'>{skill?.type}</dd>
            </dl>
        </>
    )
}

export const SkillCard = {
    Root,
    Content,
}
