import { readFileSync } from 'fs'

import { ApolloServer } from 'apollo-server'

import * as mongoose from 'mongoose'
import resolvers from './resolvers'

const typeDefs = readFileSync(__dirname + '/schemas/schema.graphql').toString(
    'utf-8',
)

require('dotenv').config()

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => ({ req }),
    })

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`Mongoose connected on port`)
    } catch (error) {
        console.log(error)
    }

    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
}

startServer()
