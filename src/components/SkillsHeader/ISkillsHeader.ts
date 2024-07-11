import {ComponentProps, MouseEventHandler} from 'react'

export interface ISkillsHeader extends ComponentProps<'header'> {
    onHandleClick: MouseEventHandler<HTMLAnchorElement>
}
