const userResolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
  },
  Mutation: {
    registerUser: async (_: any, args: any, data: any) => {
      console.log(_, args, data);
    },
  },
};

export default userResolvers;
