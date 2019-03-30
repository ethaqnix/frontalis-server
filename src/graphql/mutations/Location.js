import { transform } from './utils';
import Location from '../../db/schemas/Location';

export default {
  addLocation: async (
    _,
    args: {
      address: string
     },
  ): Location => new Location(args).save(),
  editLocation: async (
    _,
    args: {
      id: string,
      address: ?string
     },
  ): Location => Location.updateOne({ _id: args.id }, transform(args))
    .then(async () => Location.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  deleteLocation: async (
    _,
    args: {
        id: string
       },
  ): Location => Location.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
};
