import './ProjectsHeader.css'
import {useContext} from 'react'
import {ProjectsContext} from '../../context/ProjectsContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

function ProjectsHeader() {
    const {loadProjects} = useContext(ProjectsContext)
    return (
        <header className='projects__header'>
            <h2 className='projects__title'>
                meus projetos
            </h2>

            <p className='projects__desc'>
                Atualmente, meus projetos consistem, principalmente, em programação Web
                e automação. Quer vê-los? Clique no botão abaixo.
            </p>

            <a
                href='#projects-content'
                className='projects__button highlight-btn'
                onClick={loadProjects}
            >
                ver projetos
                <FontAwesomeIcon className='suffix-icon' icon={faArrowDown}/>
            </a>
        </header>
    )
}

export {ProjectsHeader}