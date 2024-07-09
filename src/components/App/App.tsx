import {Footer, Header, ScrollTop} from '../../components'

import {Default} from '../../layouts'

import './App.css'

function App() {
    return (
        <>
            <ScrollTop/>
            <Header srcPath='/computer_logo.svg'/>
            <Default/>
            <Footer/>
        </>
    )
}

export {App}
