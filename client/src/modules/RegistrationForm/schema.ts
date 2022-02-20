import { gql } from '@apollo/client'

const REGISTER_USER = gql`
    mutation RegisterUser($user: UserInput!) {
        RegisterUser(user: $user) {
            username
        }
    }
`

export default REGISTER_USER
