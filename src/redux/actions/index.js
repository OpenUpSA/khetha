import axios from 'axios';


import { syncUrl } from '../../config/api';
import { auth, messaging } from '../../helpers/firebaseHelpers';
import { complete } from '../modules/answers';
import { addUser, addNotificationToken, addPoints } from '../modules/info';
import { logStateSync } from '../modules/storage';


const createUser = () => (dispatch) => {
  const promise = auth.signInAnonymously()
    .then(({ user }) => {
      const { uid: id } = user;
      return dispatch(addUser(id));
    });

  return promise;
};


const completeTask = (id, points) => (dispatch) => {
  dispatch(complete(id));
  dispatch(addPoints(points));
  return null;
};


const syncState = () => (dispatch, getState) => {
  const newState = getState();
  const { id } = newState.info;

  return axios.post(syncUrl, { id, newState })
    .then(dispatch(logStateSync()));
};


const syncAfterTaskComplete = (id, points) => (dispatch, getState) => {
  completeTask(id, points)(dispatch);
  return syncState()(dispatch, getState);
};

const requestNotificationAccess = () => (dispatch) => {
  const promise = messaging.requestPermission()
    .then(() => messaging.getToken())
    .then(token => dispatch(addNotificationToken(token)));
  return promise;
};


export {
  createUser,
  requestNotificationAccess,
  completeTask,
  syncState,
  syncAfterTaskComplete,
};


export default {
  createUser,
  requestNotificationAccess,
  completeTask,
  syncState,
  syncAfterTaskComplete,
};
