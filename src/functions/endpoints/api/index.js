const admin = require("firebase-admin");
const { ApolloServer, gql } = require('apollo-server-cloud-functions');


const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

const Tests = gql`
  extend type Query {
    tests: [Test]
  }

  type Test {
    name: String!
    number: Int!
  }
`;


const createResolvers = firestore => ({
  Query: {
    hello: () => 'Hello world!',
    tests: () => firestore
      .collection('test')
      .get()
      .then(response => response.docs.map(doc => doc.data()))
      .catch(console.log),
  },
});


const api = ({ auth }) => {
  const { databaseURL, ...serviceAccount } = auth;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL,
  });
  const firestore = admin.firestore();
  const resolvers = createResolvers(firestore);

  const apolloServer = new ApolloServer({
    typeDefs: [typeDefs, Tests],
    resolvers,
    playground: true,
    introspection: true,
  });

  return apolloServer.createHandler()
}


module.exports = api;