import React, { Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'

import 'normalize.css'

import './styles/vars.scss'
import './styles/fonts.scss'
import './App.scss'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Suspense fallback="Loading...">
                    <App />
                </Suspense>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
