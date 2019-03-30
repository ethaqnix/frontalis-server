import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { mutationCreator } from './utils';
import User from '../../db/schemas/User';

async function cmpPwd(pwd, hash) {
  return new Promise((res, rej) => {
    bcrypt.compare(pwd, hash, (err, result) => {
      if (err) rej(err);
      res(result);
    });
  });
}

function mkJWT(data, secret = 'secret', options = { expiresIn: 60 * 60 }) {
  return jwt.sign(data, secret, options);
}

type Token = {
  token: string
}

const type = `type LoginMutation {
  token: String
  expiresIn: Int,
}`;

const mutation = `
  login(
    email: String!,
    password: String!,
  ): LoginMutation 
`;

const handler = async function login(
  _,
  {
    email,
    password,
  }: {
    email: string,
    password: string
  },
): Token {
  const user: ?User = await User.findOne({ email });
  if (user) {
    const check = await cmpPwd(password, user.password);
    if (check) {
      return {
        token: mkJWT({ email }),
        expiresIn: 60 * 60,
      };
    }
  }
  return {
    token: null,
    expiresIn: null,
  };
};

export default mutationCreator(type, mutation, handler);
