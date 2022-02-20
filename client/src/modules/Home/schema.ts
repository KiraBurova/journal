import { gql } from '@apollo/client'

const GET_POSTS = gql`
    query Posts {
        posts {
            title
        }
    }
`

export default GET_POSTS
