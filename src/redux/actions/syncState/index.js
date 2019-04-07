import axios from 'axios';

import { syncUrl } from './data.json';
import { logStateSync } from '../../modules/storage';

const syncState = () => (dispatch, getState) => {
  const newState = getState();
  const { id } = newState.info;

  return axios.post(syncUrl, { id, newState })
    .then(dispatch(logStateSync()));
};

export default syncState;
