import express from 'express';
import os from 'os';
import ApolloServer from './graphql';
import db from './db';

const networkInterfaces = os.networkInterfaces();
const port = 8080;
const ip = Object.keys(networkInterfaces).reduce((acc, e, i) => {
  if (acc) return acc;
  const netInt = networkInterfaces[e].filter(f => f.family === 'IPv4' && f.internal === false);
  if (!netInt.length || /^(127|0)/.test(netInt[0].address)) return null;
  return netInt[0].address;
}, null);

const app = express();
process.on('SIGINT', () => { console.log('Bye bye!'); process.exit(); });

db().then(() => {
  ApolloServer.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://${ip}:${port}${ApolloServer.graphqlPath}`);
    console.info(`running on ${ip}:${port}`);
  });
}).catch((err) => {
  console.error(err);
});
