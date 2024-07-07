import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Hero.css'

function Hero() {
    return (
        <header className='hero'>
            <h1 className='hero__title crt'>
                <span>
                  Thiago Rodrigues Santos <span aria-hidden>_</span>
                </span>
            </h1>

            <p className='hero__subtitle'>
                <span lang='en'>web developer</span>
            </p>

            <a className='hero__anchor' href='#about'>
                desça a página
                <FontAwesomeIcon className='suffix-icon' icon={faArrowDown}/>
            </a>
        </header>
    )
}

export {Hero}