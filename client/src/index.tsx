import React, { Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import 'normalize.css'

import './styles/vars.scss'
import './App.scss'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback="Loading...">
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
