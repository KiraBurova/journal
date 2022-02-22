import { ApolloError } from 'apollo-server'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { MutationResolvers, QueryResolvers, User } from '../types/types'

import { UserModel } from '../models'
import { UserRegistrationSchema, UserLoginSchema } from '../validation'
import { decodedToken } from '../utils'

interface Resolvers {
    Query: QueryResolvers
    Mutation: MutationResolvers
}

const userResolvers: Resolvers = {
    Query: {
        currentUser: (root, args, { req }) => {
            const decoded = decodedToken(req.headers.authorization) as User

            return decoded
        },
    },
    Mutation: {
        RegisterUser: async (_, { user }) => {
            const { username, email, password } = user

            try {
                await UserRegistrationSchema.validateAsync({
                    username,
                    email,
                    password,
                })
            } catch (validationError) {
                throw new ApolloError(validationError)
            }

            const foundUser = await UserModel.findOne({ email: email })

            if (foundUser) {
                throw new ApolloError('User already exists.')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = new UserModel({ username, email, password: hash })

            try {
                await newUser.save()
            } catch (savingError) {
                throw new ApolloError(savingError)
            }

            return newUser
        },
        LoginUser: async (_, { user }) => {
            const { email, password } = user

            try {
                await UserLoginSchema.validateAsync({ email, password })
            } catch (validationError) {
                throw new ApolloError(validationError)
            }

            let foundUser: User

            try {
                foundUser = await UserModel.findOne({ email: email })
            } catch (foundError) {
                throw new ApolloError(foundError)
            }

            const isValid = await bcrypt.compare(password, foundUser.password)

            if (isValid) {
                return jwt.sign(
                    { ...user, _id: foundUser._id },
                    process.env.SECRET,
                )
            } else {
                throw new ApolloError('Password is not correct.')
            }
        },
    },
}

export default userResolvers
