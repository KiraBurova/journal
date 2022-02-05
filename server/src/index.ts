import { readFileSync } from 'fs';

import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';

const typeDefs = readFileSync(__dirname + '/schemas/schema.graphql').toString('utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
