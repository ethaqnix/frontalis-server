import Travel from '../../db/schemas/Travel';

export default {
  travels: async (_, args, context, info) => Travel.find(args),
  travel: async (_, args, context, info) => Travel.findOne(args),
};
