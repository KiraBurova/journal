import { ApolloError, UserInputError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import { MutationResolvers, QueryResolvers } from '../types/types';

import UserModel from '../models/user';
import UserSchema from '../validation/user';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

const userResolvers: Resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
  },
  Mutation: {
    RegisterUser: async (_, { user }) => {
      const { username, email, password } = user;

      if (!Object.values(user).length) {
        throw new UserInputError('User information can not be empty.');
      }

      const validatedValues = await UserSchema.validateAsync({ username, email, password });

      if (!validatedValues) {
        throw new ApolloError('Validation failed.');
      }

      const foundUser = await UserModel.findOne({ email: email });

      if (foundUser) {
        throw new ApolloError('User already exists.');
      }

      const hash = bcrypt.hashSync('bacon', 8);

      const newUser = new UserModel({ username, email, password: hash });

      const savedUser = await newUser.save();

      if (!savedUser) {
        throw new ApolloError('Failed to create user.');
      }

      return 1;
    },
  },
};

export default userResolvers;
