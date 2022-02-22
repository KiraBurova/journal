import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation LoginUser($user: UserInput!) {
        LoginUser(user: $user)
    }
`
export default LOGIN_USER
