import User from '../../db/schemas/User';

export default {
  users: async (_, args, context, info) => User.find(args),
  user: async (_, args, context, info) => User.findOne(args),
};
