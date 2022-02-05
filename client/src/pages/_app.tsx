import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack'
import client from '../lib/apolloClient'

import '../styles/globals.scss'
import '../styles/vars.scss'
import '../styles/fonts.scss'

interface IApp {
    Component: any
    pageProps: unknown
}

export default ({ Component, pageProps }: IApp) => (
    <ApolloProvider client={client}>
        <SnackbarProvider>
            <Component {...pageProps} />
        </SnackbarProvider>
    </ApolloProvider>
)
