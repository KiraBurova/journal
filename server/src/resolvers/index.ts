import userResolvers from './user'
import postResolvers from './post'

const resolvers = {
    ...userResolvers,
    ...postResolvers,
}

export default resolvers
