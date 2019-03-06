const functions = require('firebase-functions');


const syncState = require('./endpoints/syncState');


module.exports = {
  sync: functions.https.onRequest(syncState),
};
