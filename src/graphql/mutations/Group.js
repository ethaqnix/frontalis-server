import Group from '../../db/schemas/Group';

export default {
  addGroup: async (
    _,
    args: {
        isPrivate: boolean,
        members: [string],
        travels: [string]
      },
  ): Group => new Group(args).save(),
  editGroup: async (
    _,
    args: {
        id: string,
        isPrivate: boolean,
        members: [string],
        travels: [string]
      },
  ): Group => Group.updateOne({ _id: args.id }, t(args))
    .then(async () => Group.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  deleteGroup: async (
    _,
    args: {
        id: string
      },
  ): Group => Group.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
};
