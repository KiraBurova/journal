import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../../ui/button'

import { getToken } from '../../utils/token'

import styles from './styles.module.scss'

const MainNavbar = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        setToken(getToken())
    }, [])

    const showLogoutButton = Boolean(token)
    return (
        <header className={styles.header}>
            <div className={styles.nameContainer}>
                <h1 className={styles.name}>
                    <Link href="/">Journal</Link>
                </h1>
            </div>
            {showLogoutButton && (
                <div>
                    <Button>Logout</Button>
                </div>
            )}
        </header>
    )
}

export default MainNavbar
