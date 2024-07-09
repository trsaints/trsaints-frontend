import {socialMediaService,} from '../../services'

import {About, Contact, Hero, Projects, Skills} from '../../pages'
import {MainContextProvider} from '../../context/providers'

function Default() {
    const links = socialMediaService.getAllSocialLinks()

    return (
        <MainContextProvider>
            <main className='main'>
                <Hero/>
                <About links={links} srcPath={''}/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
        </MainContextProvider>
    )
}

export {Default}
