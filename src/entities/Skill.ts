import {Entity} from './Entity'

export interface Skill extends Entity {
    category: 'hard' | 'soft'
    description: string
    bannerUrl: string
    bannerAlt: string
}