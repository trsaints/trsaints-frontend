import {ComponentProps} from 'react'
import {SocialLink} from '../../types'

export interface IAbout extends ComponentProps<'article'> {
    links: SocialLink[]
    srcPath: string
}