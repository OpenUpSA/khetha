const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const auth = require('./private-key.json');
const createApolloServer = require('./endpoints/createApolloServer');


const apolloApp = express();
apolloApp.use(cors());
const apolloServer = createApolloServer({ auth });
apolloServer.applyMiddleware({ app: apolloApp, path: '/' });
const api = functions.https.onRequest(apolloApp);


module.exports = {
  api,
};
