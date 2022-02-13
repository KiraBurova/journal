import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import { withHydrate } from 'effector-next'

import client from '../lib/apolloClient'
import MainNavbar from '../modules/MainNavbar'

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

const enhance = withHydrate()

export default enhance(({ Component, pageProps }: IApp) => (
    <ApolloProvider client={client}>
        <MainNavbar />
        <Layout>
            <>
                <ToastContainer
                    hideProgressBar
                    theme="colored"
                    autoClose={2000}
                    position="bottom-right"
                />
                <Component {...pageProps} />
            </>
        </Layout>
    </ApolloProvider>
))
