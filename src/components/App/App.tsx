import {useContext, useEffect} from 'react'
import {MainContext} from '../../context/MainContext'

import {Footer, Header, ScrollTop} from '../../components'
import {Default} from '../../layouts'

import './App.css'

function App() {
    const {setIsModalOpen} = useContext(MainContext)

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) =>
            event.key === 'Escape' && setIsModalOpen(false)

        document.addEventListener('keydown', closeOnEscape)

        return () => document.removeEventListener('keydown', closeOnEscape)
    }, [setIsModalOpen])
    
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
