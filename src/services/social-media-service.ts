import {SocialLink} from '../types'

function getAllSocialLinks(): SocialLink[] {
    return [
        {
            label: 'Github',
            url: 'https://github.com/trsaints',
        },
        {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/trsaints2003/',
        },
    ]
}

export const socialMediaService = {
    getAllSocialLinks,
}
