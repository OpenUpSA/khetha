import { auth } from '../../../helpers/firebaseHelpers';
import createDispatchPipe from '../../../helpers/createDispatchPipe';

const REPLACE_STATE = 'info/REPLACE_STATE';
const SET_ID = 'info/SET_ID';
const REPLACE_VALUE = 'info/REPLACE_VALUE';
const REPLACE_VALUE_AND_TIMESTAMP = 'info/REPLACE_VALUE_AND_TIMESTAMP';
const LOG_NEW_GUEST_ACCOUNT = 'info/LOG_NEW_GUEST_ACCOUNT';
const CHANGE_LANGUAGE = 'info/CHANGE_LANGUAGE';
const ADD_NOTIFICATION_TOKEN = 'info/ADD_NOTIFICATION_TOKEN';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case REPLACE_STATE: return action.payload.state;

    case SET_ID: return {
      ...state,
      id: action.payload,
    };

    case CHANGE_LANGUAGE: return {
      ...state,
      language: {
        timestamp: action.payload.time,
        value: action.payload.isoKey,
      },
    };

    case ADD_NOTIFICATION_TOKEN: return {
      ...state,
      notifications: [
        ...state.notifications,
        {
          timestamp: action.payload.time,
          value: action.payload.token,
        },
      ],
    };

    case REPLACE_VALUE: return {
      ...state,
      [action.payload.key]: action.payload.value,
    };

    case REPLACE_VALUE_AND_TIMESTAMP: return {
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


export const setUserValue = ({ key, value, timestamp }) => {
  if (!timestamp) {
    return {
      type: REPLACE_VALUE,
      payload: {
        key,
        value,
      },
    };
  }

  return {
    type: REPLACE_VALUE_AND_TIMESTAMP,
    payload: {
      time: new Date().getTime(),
      key,
      value,
    },
  };
};


export const addNotificationToken = ({ token }) => ({
  type: ADD_NOTIFICATION_TOKEN,
  payload: {
    time: new Date().getTime(),
    token,
  },
});


export const changeLanguage = ({ isoKey }) => ({
  type: REPLACE_VALUE_AND_TIMESTAMP,
  payload: {
    time: new Date().getTime(),
    isoKey,
  },
});

export const createNewGuestAccount = () => (dispatch) => {
  const dispatchPipe = createDispatchPipe(dispatch);
  const logNewGuestAccount = dispatchPipe({ type: LOG_NEW_GUEST_ACCOUNT });

  const promise = new Promise((resolve) => {
    const result = auth
      .signInAnonymously()
      .then(logNewGuestAccount)
      .then(resolve);
    return result;
  });

  return promise;
};
