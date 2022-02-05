import { gql } from '@apollo/client'

const REGISTER_USER = gql`
    mutation RegisterUser($user: UserInput!) {
        registerUser(user: $user) {
            username
            email
            password
        }
    }
`

export default REGISTER_USER
