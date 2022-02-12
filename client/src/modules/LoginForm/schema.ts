import { gql } from '@apollo/client'

const LOGIN_USER = gql`
    mutation LoginUser($user: UserInput!) {
        LoginUser(user: $user)
    }
`

export default LOGIN_USER
