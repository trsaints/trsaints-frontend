import {useContext} from 'react'
import {MainContext} from '../../context/MainContext'

import {faClose} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Modal.css'

function Modal() {
    const {modalContent, isModalOpen, setIsModalOpen} = useContext(MainContext)

    const closeOnClick = () => setIsModalOpen(false)

    return (
        <dialog
            className='modal window-frame'
            open={isModalOpen}
            aria-hidden={isModalOpen}>
            <menu className='modal__menu'>
                <li>
                    <button className='modal__close link-btn' onClick={closeOnClick}>
                        <span className='sr-only'>fechar</span>
                        <FontAwesomeIcon icon={faClose} size='lg'/>
                    </button>
                </li>
            </menu>

            {modalContent}
        </dialog>
    )
}

export {Modal}