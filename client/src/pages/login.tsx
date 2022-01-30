import * as React from 'react'

import LoginForm from '../components/LoginForm'

import styles from './pages.module.scss'

export const LoginPage = () => (
    <div className={styles.centeredPage}>
        <LoginForm />
    </div>
)

export default LoginPage