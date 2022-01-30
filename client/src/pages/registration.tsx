import * as React from 'react'

import RegistrationForm from '../components/RegistrationForm'

import styles from './pages.module.scss'

export const RegistrationPage = () => (
    <div className={styles.centeredPage}>
        <RegistrationForm />
    </div>
)

export default RegistrationPage
