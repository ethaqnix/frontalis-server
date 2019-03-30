import Location from '../../db/schemas/Location';

export default {
  locations: async (_, args, context, info) => Location.find(args),
  location: async (_, args, context, info) => Location.findOne(args),
};
