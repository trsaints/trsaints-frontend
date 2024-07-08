import {IPitch} from './IPitch'
import './Pitch.css'

function Pitch(props: IPitch) {
    const {srcPath} = props

    return (
        <aside className='window-frame pitch'>
            <video className='pitch__video' src={srcPath}></video>

            <menu className='pitch__controls'>
                <li className='pitch__control'>
                    <button className='pitch__button'>play</button>
                </li>
            </menu>
        </aside>
    )
}

export {Pitch}