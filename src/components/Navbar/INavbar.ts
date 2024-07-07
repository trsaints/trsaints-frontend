import {Link} from '../../types/Link'
import {IconProp} from '@fortawesome/fontawesome-svg-core'

export interface INavbar extends React.ComponentProps<'nav'> {
    element: string
    links: Link[]
    icon: IconProp
}