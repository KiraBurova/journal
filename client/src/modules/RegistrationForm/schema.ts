import { gql } from '@apollo/client'

const BOOKS = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`

export default BOOKS
