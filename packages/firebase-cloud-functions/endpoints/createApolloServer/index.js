const admin = require('firebase-admin');
const { ApolloServer, gql } = require('apollo-server-express');
const { createTypeDefs, createResolvers } = require('./schema');


const createApolloServer = ({ auth }) => {
  const { databaseURL, private_key: serverPrivateKey } = auth;
  admin.initializeApp({
    credential: admin.credential.cert(auth),
    databaseURL,
  });

  const firestore = admin.firestore();
  const messaging = admin.messaging();
  const typeDefs = createTypeDefs({ gql });
  const resolvers = createResolvers({ firestore, messaging, serverPrivateKey });

  return new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
    uploads: false,
  });
};


module.exports = createApolloServer;
