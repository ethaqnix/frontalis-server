import User from '../../db/schemas/User';
import { transform } from './utils';

export default {
  addUser: async (
    _,
    args: {
         name: string,
         email: string,
         password: string,
        },
  ): User => new User(args).save(),
  editUser: async (
    _,
    args: {
         id: ?string,
         name: ?string,
        },
  ): User => User.updateOne({ _id: args.id }, transform(args))
    .then(async () => User.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  deleteUser: async (
    _,
    args: {
           id: ?string,
          },
  ): User => User.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),

};
