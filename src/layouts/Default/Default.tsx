import {socialMediaService,} from '../../services'

import {About, Contact, Hero, Projects, Skills} from '../../pages'
import {Modal} from '../../components'

function Default() {
    const links = socialMediaService.getAllSocialLinks()

    return (
        <main className='main'>
            <Hero/>
            <About links={links} srcPath={''}/>
            <Skills/>
            <Projects/>
            <Modal/>
            <Contact/>
        </main>
    )
}

export {Default}
