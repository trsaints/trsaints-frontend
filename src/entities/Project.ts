import {Entity} from './Entity'

export interface Project extends Entity {
    description: string
    releaseDate: Date
    skillsIds: number[]
    bannerUrl: string
    bannerAlt: string
    deployUrl?: string
    sourceUrl: string
}