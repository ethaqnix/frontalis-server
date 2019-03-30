import bcrypt from 'bcrypt';
import User from '../../db/schemas/User';
import { transform } from './utils';

async function mkPwd(pwd, saltRounds = 12) {
  return new Promise((res, rej) => {
    bcrypt.hash(pwd, saltRounds, (err, hash) => {
      if (err) return rej(err);
      return res(hash);
    });
  });
}

export default {
  addUser: async (
    _,
    args: {
         name: string,
         email: string,
         password: string,
        },
  ): User => {
    const password = await mkPwd(args.password);
    return new User({
      ...args,
      password,
    }).save();
  },
  editUser: async (
    _,
    args: {
         id: ?string,
         name: ?string,
         email: ?string,
         password: ?string,
        },
  ): User => {
    const params = { ...args };
    if (args.password) {
      params.password = await mkPwd(args.password);
    }
    return User.updateOne({ _id: args.id }, transform(params))
      .then(async () => User.findOne({ _id: args.id }))
      .catch((err) => { console.error(err); return null; });
  },
  deleteUser: async (
    _,
    args: {
           id: ?string,
          },
  ): User => User.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),

};
