import React from 'react'
import {MainContextProvider} from './context/providers'

import ReactDOM from 'react-dom/client'

import {App} from './components'

import './reset.css'
import './index.css'
import './interactions.css'
import './animations.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainContextProvider>
            <App/>
        </MainContextProvider>
    </React.StrictMode>
)
