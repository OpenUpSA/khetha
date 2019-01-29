import { auth } from '../../../helpers/firebase';
import createDispatchPipe from '../../../helpers/createDispatchPipe';
import createUserInDatabasePromise from './createUserInDatabasePromise';

const REPLACE_STATE = 'user/REPLACE_STATE';
const REPLACE_VALUE = 'users/REPLACE_VALUE';
const LOG_NEW_GUEST_ACCOUNT = 'user/LOG_NEW_GUEST_ACCOUNT';
const LOG_USER_DB_OBJECT_CREATED = 'user/LOG_USER_DB_OBJECT_CREATED';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case REPLACE_STATE: return action.payload.state;

    case REPLACE_VALUE: return {
      ...state,
      [action.payload.key]: {
        timestamp: action.payload.time,
        value: action.payload.value,
      },
    };

    default: return state;
  }
};


export const replaceEntireState = ({ state }) => ({
  type: REPLACE_STATE,
  payload: {
    state,
  },
});


export const setUserValue = (object) => {
  const key = Object.keys(object)[0];
  const value = object[key];

  return {
    type: REPLACE_VALUE,
    payload: {
      time: new Date().getTime(),
      key,
      value,
    },
  };
};


export const createGuestAccount = () => (dispatch) => {
  const dispatchPipe = createDispatchPipe(dispatch);
  const logNewGuestAccount = dispatchPipe({ type: LOG_NEW_GUEST_ACCOUNT });
  const logUserDbObjectCreated = dispatch({ type: LOG_USER_DB_OBJECT_CREATED });

  const promise = new Promise((resolve) => {
    const result = auth
      .signInAnonymously()
      .then(logNewGuestAccount)
      .then(createUserInDatabasePromise)
      .then(logUserDbObjectCreated)
      .then(resolve);
    return result;
  });

  return promise;
};
