import User from '../../db/schemas/User';
import Group from '../../db/schemas/Group';
import Travel from '../../db/schemas/Travel';
import Location from '../../db/schemas/Location';

export default {
  users: async (_, args, context, info) => User.find(args),
  locations: async (_, args, context, info) => Location.find(args),
  groups: async (_, args, context, info) => Group.find(args),
  travels: async (_, args, context, info) => Travel.find(args),
  user: async (_, args, context, info) => User.findOne(args),
  location: async (_, args, context, info) => Location.findOne(args),
  group: async (_, args, context, info) => Group.findOne(args),
  travel: async (_, args, context, info) => Travel.findOne(args),
};
