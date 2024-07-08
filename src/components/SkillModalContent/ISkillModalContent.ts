import {PropsWithChildren} from 'react'

export interface ISkillModalContent extends PropsWithChildren {
    title: string
    description: string
    bannerUrl: string
    bannerAlt: string
}
