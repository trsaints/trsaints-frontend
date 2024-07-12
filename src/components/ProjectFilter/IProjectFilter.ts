import {ComponentProps, FormEventHandler} from 'react'

export interface IProjectFilter extends ComponentProps<'form'> {
    onHandleSubmit: FormEventHandler<HTMLFormElement>
}

export interface IProjectFilterSelect extends ComponentProps<'div'> {
    options: string[]
}