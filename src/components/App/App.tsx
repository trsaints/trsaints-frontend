import {Footer, Header, ScrollTop} from '../../components'
import {MainContent} from '../../layouts'

import './App.css'

function App() {
    return (
        <>
            <ScrollTop/>
            <Header srcPath='/computer_logo.svg'/>
            <MainContent/>
            <Footer/>
        </>
    )
}

export {App}
