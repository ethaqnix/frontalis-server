import Travel from '../../db/schemas/Travel';

export default {
  addTravel: async (
    _,
    args: {
        driver: ?string,
        locations: [string],
        members: [string],
        startAt: ?string,
        endAt: string
      },
  ): Travel => new Travel(args).save(),
  editTravel: async (
    _,
    args: {
      id: string,
      driver: ?string,
      locations: [string],
      members: [string],
      startAt: ?string,
      endAt: string
      },
  ): Travel => Travel.updateOne({ _id: args.id }, t(args))
    .then(async () => Travel.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  deleteTravel: async (
    _,
    args: {
         id: string
        },
  ): Travel => Travel.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
};
