import {ReactElement} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {IFormField} from './IFormField'
import './FormField.css'

function FormField(props: IFormField) {
    const {
              icon,
              label,
              id,
              iconPosition,
              placeholder,
              inputType
          } = props

    const iconSelector = `${iconPosition}-icon`

    let inputElement: ReactElement

    if (inputType)
        inputElement = <input className='form-field__input'
                              type={inputType}
                              id={id}
                              placeholder={placeholder}/>
    else
        inputElement = <textarea className='form-field__textarea'
                                 id={id}
                                 placeholder={placeholder}/>

    return (
        <div className='form-field'>
            <label className='form-field__label' htmlFor={id}>
                <FontAwesomeIcon className={iconSelector} icon={icon}/>
                {label}
            </label>

            {inputElement}
        </div>
    )
}

export {FormField}