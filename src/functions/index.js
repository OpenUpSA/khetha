const functions = require('firebase-functions');
const api = require('./endpoints/api');
const auth = require('../../server.auth.json');


exports.api = functions.https.onRequest(api({ auth }));
