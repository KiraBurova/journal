import { gql } from '@apollo/client'

const CREATE_POST = gql`
    mutation CreatePost($post: PostInput!) {
        CreatePost(post: $post) {
            title
        }
    }
`

export default CREATE_POST
