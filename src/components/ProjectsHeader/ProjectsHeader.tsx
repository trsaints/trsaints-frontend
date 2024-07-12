import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {IProjectsHeader} from './IProjectsHeader'
import './ProjectsHeader.css'
import {intersectionService} from '../../services'

function ProjectsHeader(props: IProjectsHeader) {
    const {onHandleClick} = props
    const ref = intersectionService.useIntersectionObserver<HTMLHeadingElement>(0.75, (entry) => {
        intersectionService.addAnimation(entry, 'typed-out')
    })

    return (
        <header className='projects__header'>
            <h2 className='projects__title' ref={ref}>
                meus projetos
            </h2>

            <p className='projects__desc'>
                Atualmente, meus projetos consistem, principalmente, em programação Web
                e automação. Quer vê-los? Clique no botão abaixo.
            </p>

            <a
                href='#projects-content'
                className='projects__button highlight-btn'
                onClick={onHandleClick}
            >
                ver projetos
                <FontAwesomeIcon className='suffix-icon' icon={faArrowDown}/>
            </a>
        </header>
    )
}

export {ProjectsHeader}