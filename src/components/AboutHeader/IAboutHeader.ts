import {ComponentProps} from 'react'
import {SocialLink} from '../../types/SocialLink'

export interface IAboutHeader extends ComponentProps<'header'> {
    links: SocialLink[]
}
