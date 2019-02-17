import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './types.js';

export default new ApolloServer({ typeDefs, resolvers });
