import { useRouter } from 'next/router'
import React from 'react'
import { usePostsQuery } from '../../graphql/generated'

import Button from '../../ui/button'

import styles from './styles.module.scss'

const Home = () => {
    const router = useRouter()
    const { data } = usePostsQuery()

    console.log(data)

    const handleRedirectToCreatePost = () => {
        router.push('/create-post')
    }

    return (
        <div>
            <Button
                className={styles.floatButton}
                onClick={handleRedirectToCreatePost}>
                +
            </Button>
        </div>
    )
}

export default Home
