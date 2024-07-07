import {Footer, Header, ScrollTop} from '../../components'
import {MainContent} from '../../layouts'

import './App.css'
import {MainContextProvider} from '../../context/providers/MainContextProvider'

function App() {
    return (
        <>
            <ScrollTop/>
            <Header srcPath='/computer_logo.svg'/>
            
            <MainContextProvider>
                <MainContent/>
            </MainContextProvider>
            
            <Footer/>
        </>
    )
}

export {App}
