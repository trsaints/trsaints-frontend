import {ComponentProps} from 'react'
import {SocialLink} from '../../types'

export interface IAboutHeader extends ComponentProps<'header'> {
    links: SocialLink[]
}
