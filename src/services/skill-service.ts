import {Skill} from '../entities'

function getPlaceholderSkills(): Skill[] {
    return [
        {
            uuid: 1,
            title: 'JavaScript',
            category: 'hard',
            description: 'JavaScript is a programming language that is used to create interactive effects within web browsers.',
            bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            bannerAlt: 'JavaScript logo'
        },
        {
            uuid: 2,
            title: 'HTML',
            category: 'hard',
            description: 'HTML is a markup language that is used to create the structure of web pages.',
            bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
            bannerAlt: 'HTML5 logo'
        },
        {
            uuid: 3,
            title: 'CSS',
            category: 'hard',
            description: 'CSS is a style sheet language that is used to style the appearance of web pages.',
            bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
            bannerAlt: 'CSS3 logo'
        }
    ]
}

function getSkillById(skills: Skill[], id: number) {
    return skills.find(skill => skill.uuid === id)
}

export const skillService = {
    getPlaceholderSkills,
    getSkillById
}