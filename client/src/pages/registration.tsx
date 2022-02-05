import * as React from 'react'

import RegistrationForm from '../modules/RegistrationForm'

import styles from './pages.module.scss'

export const RegistrationPage = () => (
    <div className={styles.centeredPage}>
        <RegistrationForm />
    </div>
)

export default RegistrationPage
