import Group from '../../db/schemas/Group';

export default {
  groups: async (_, args, context, info) => Group.find(args),
  group: async (_, args, context, info) => Group.findOne(args),
};
