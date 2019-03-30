import { ApolloServer } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import resolvers from './resolvers';
import typeDefs from './types.js';
import User from '../db/schemas/User';

const decodeJWT = (token, secret = 'secret')
: Promise<{email: string, iat: number, exp: number}> => (
  new Promise(
    (res, rej) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) return rej(err);
        return res(decoded);
      });
    },
  )
);

export default new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    try {
      const { email, iat, exp } = await decodeJWT(token);
      if (iat < exp) {
        const user = await User.findOne({ email });
        return { user };
      }
      throw new Error(`Token expired for user: ${email}`);
    } catch (err) {
      return {};
    }
  },
});
