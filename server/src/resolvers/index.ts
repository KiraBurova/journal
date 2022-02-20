import { merge } from 'lodash'

import { Resolvers } from '../types/types'
import userResolvers from './user'
import postResolvers from './post'

const resolvers: Resolvers = merge({}, userResolvers, postResolvers)

export default resolvers
