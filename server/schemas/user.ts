import { gql } from 'apollo-server';

const userTypeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    username: String!
    email: String!
    password: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
  }

  type Mutation {
    registerUser(user: UserInput!): [User]
  }
`;

export default userTypeDefs;
