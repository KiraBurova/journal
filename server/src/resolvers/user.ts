import { UserInputError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import { MutationResolvers, QueryResolvers } from '../types/types';

import User from '../models/user';

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
      const hash = bcrypt.hashSync('bacon', 8);

      const newUser = new User({ username, email, password });

      await newUser.save();

      console.log(user, hash);
      return 1;
    },
  },
};

export default userResolvers;
