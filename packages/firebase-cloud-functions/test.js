/* eslint-disable import/no-extraneous-dependencies */


const axios = require('axios');


const url = 'http://localhost:5000/khetha-project/us-central1/sync';
return axios.post(url, { id: 'test-user', newState: { test: true } })
  .then(({ data }) => console.log(data))
  .catch(console.warn);
