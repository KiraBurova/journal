import * as bcrypt from 'bcryptjs';
import { MutationResolvers, QueryResolvers } from '../types/types';

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
    RegisterUser(_, { user }) {
      const hash = bcrypt.hashSync('bacon', 8);

      console.log(user, hash);
      return 1;
    },
  },
};

export default userResolvers;
