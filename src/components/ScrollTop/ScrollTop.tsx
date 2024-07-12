import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './ScrollTop.css'

function ScrollTop() {
    return (
        <a className='scroll-top' href='#' tabIndex={0}>
            <span className='sr-only'>Voltar ao início</span>
            <FontAwesomeIcon icon={faArrowUp}/>
        </a>
    )
}

export {ScrollTop}
