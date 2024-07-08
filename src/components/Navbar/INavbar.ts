import {LinkData} from '../../types'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {ComponentProps} from 'react'

export interface INavbar extends ComponentProps<'nav'> {
    element: string
    links: LinkData[]
    icon?: IconProp
}