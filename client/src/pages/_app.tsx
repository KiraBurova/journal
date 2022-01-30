import * as React from 'react'

import '../styles/globals.scss'
import '../styles/vars.scss'
import '../styles/fonts.scss'

interface IApp {
    Component: any
    pageProps: unknown
}

export default ({ Component, pageProps }: IApp) => <Component {...pageProps} />
