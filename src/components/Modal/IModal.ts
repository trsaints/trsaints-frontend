import {ComponentProps, MouseEventHandler} from 'react'

export interface IModal extends ComponentProps<'dialog'> {
    onHandleClick: MouseEventHandler<HTMLButtonElement>
}