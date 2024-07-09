import {ComponentProps, HTMLInputTypeAttribute} from 'react'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

export interface IFormField extends ComponentProps<'div'> {
    icon: IconDefinition
    iconPosition: 'prefix' | 'suffix'
    placeholder: string
    inputType?: HTMLInputTypeAttribute
    label: string
    id: string
}