import {ComponentProps, MouseEventHandler} from 'react'

export interface IProjectsHeader extends ComponentProps<'header'> {
    onHandleClick: MouseEventHandler<HTMLAnchorElement>
}