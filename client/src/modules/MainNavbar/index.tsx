import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import Button from '../../ui/button'

import { getToken, deleteToken } from '../../utils/token'
import { $tokenStore, setTokenEvent } from '../../store/store'

import styles from './styles.module.scss'

const MainNavbar = () => {
    const router = useRouter()
    const storedToken = useStore($tokenStore)
    const [token, setToken] = useState(storedToken)

    useEffect(() => {
        if (storedToken) {
            setToken(storedToken)
        } else {
            setToken(getToken())
        }
    }, [storedToken])

    const handleLogout = () => {
        deleteToken()
        setTokenEvent(getToken())
        router.push('/login')
    }

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
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            )}
        </header>
    )
}

export default MainNavbar
