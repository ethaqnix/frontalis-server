import { mutationCreator } from './utils';
import User from '../../db/schemas/User';

type Token = {
  token: string
}

const type = `type LoginMutation {
  token: String
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
  const user: ?User = await User.findOne({ email, password });
  if (user) {
    return {
      token: 'Fake',
    };
  }
  return {
    token: null,
  };
};

export default mutationCreator(type, mutation, handler);
