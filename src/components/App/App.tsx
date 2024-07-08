import {Footer, Header, ScrollTop} from '../../components'
import {Default} from '../../layouts'

import './App.css'
import {MainContextProvider} from '../../context/providers/MainContextProvider/MainContextProvider'

function App() {
    return (
        <>
            <ScrollTop/>
            <Header srcPath='/computer_logo.svg'/>
            
            <MainContextProvider>
                <Default/>
            </MainContextProvider>
            
            <Footer/>
        </>
    )
}

export {App}
