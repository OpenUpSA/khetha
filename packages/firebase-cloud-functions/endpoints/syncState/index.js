const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');


const auth = require('../../private-key.json');


admin.initializeApp({
  credential: admin.credential.cert(auth),
  databaseURL: `https://${auth.project_id}.firebaseio.com`,
});


const firestore = admin.firestore();


const corsOptions = {
  origin: 'https://khetha.org.za',
  optionsSuccessStatus: 200,
};


const syncState = express();
syncState.use(cors(corsOptions));


const successResponse = (error, id = null) => ({
  id,
  error,
  success: !error && true,
});


const callback = async (request, response) => {
  const { id, newState } = request.body;

  return firestore
    .collection('users')
    .doc(id)
    .set({ jsonString: JSON.stringify(newState) })
    .then(() => response.json(successResponse(false, id)));
};


syncState.post('/', callback);


module.exports = syncState;
