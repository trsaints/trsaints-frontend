import {useContext} from 'react'
import {ProjectsContext} from '../../context/ProjectsContext'
import {Modal} from '../Modal'
import {ProjectModal} from '../ProjectModal'

import {IProjectsPanel} from './IProjectsPanel'
import './ProjectsPanel.css'

function ProjectsPanel(props: IProjectsPanel) {
    const {hideProject} = useContext(ProjectsContext)
    const {project}     = props

    return (project !== undefined) && (
        <Modal onHandleClick={hideProject}>
            <ProjectModal
                project={project}
                releaseDate={project.releaseDate.toDateString()}
                stack={['to be replaced']}/>
        </Modal>
    )
}

export {ProjectsPanel}