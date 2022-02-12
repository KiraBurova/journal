import { gql } from '@apollo/client'

const REGISTER_USER = gql`
    mutation RegisterUser($user: UserInput!) {
        RegisterUser(user: $user)
    }
`

export default REGISTER_USER
