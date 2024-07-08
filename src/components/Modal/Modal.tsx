import {faClose} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {IModal} from './IModal'
import './Modal.css'

function Modal(props: IModal) {
    const {children, onHandleClick} = props

    return (
        <dialog className='modal window-frame'>
            <menu className='modal__menu'>
                <li>
                    <button className='modal__close link-btn' onClick={onHandleClick}>
                        <span className='sr-only'>fechar</span>
                        <FontAwesomeIcon icon={faClose} size='lg'/>
                    </button>
                </li>
            </menu>

            {children}
        </dialog>
    )
}

export {Modal}