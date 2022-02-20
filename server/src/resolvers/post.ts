import { ApolloError } from 'apollo-server'
import { MutationResolvers, QueryResolvers, Post } from '../types/types'

import { PostModel } from '../models'

interface Resolvers {
    Query: QueryResolvers
    Mutation: MutationResolvers
}

const postResolvers: Resolvers = {
    Query: {
        posts() {
            return []
        },
        post() {
            const newPost = new PostModel()

            return newPost
        },
    },
    Mutation: {
        CreatePost: (_, { post }) => {
            const newPost = new PostModel({ post })

            return newPost
        },
        DeletePost: (_, id) => {
            const newPost = new PostModel({ id })

            return newPost
        },
        EditPost: (_, id) => {
            const newPost = new PostModel({ id })

            return newPost
        },
    },
}

export default postResolvers
