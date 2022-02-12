import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import client from '../lib/apolloClient'

import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'
import '../styles/vars.scss'
import '../styles/fonts.scss'

import styles from './layout.module.scss'

interface IApp {
    Component: any
    pageProps: unknown
}

interface ILayout {
    children: JSX.Element
}

const Layout = ({ children }: ILayout) => (
    <div className={styles.centeredPage}>{children}</div>
)

export default ({ Component, pageProps }: IApp) => (
    <ApolloProvider client={client}>
        <Layout>
            <>
                <ToastContainer
                    hideProgressBar
                    theme="colored"
                    autoClose={10000}
                />
                <Component {...pageProps} />
            </>
        </Layout>
    </ApolloProvider>
)
