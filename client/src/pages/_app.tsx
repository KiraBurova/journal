import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import client from '../lib/apolloClient'

import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'
import '../styles/vars.scss'
import '../styles/fonts.scss'

interface IApp {
    Component: any
    pageProps: unknown
}

export default ({ Component, pageProps }: IApp) => (
    <>
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
        <ToastContainer hideProgressBar theme="colored" autoClose={3000} />
    </>
)
