const REPLACE_STATE = 'storage/REPLACE_STATE';
const SET_VERSION = 'storage/SET_VERSION';
const UPDATE_SYNC_TIME = 'storage/UPDATE_SYNC_TIME';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case REPLACE_STATE: return action.payload.state;

    case UPDATE_SYNC_TIME: return {
      ...state,
      synced: action.payload.time,
    };

    case SET_VERSION: return {
      ...state,
      version: action.payload.version,
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


export const setVersion = version => ({
  type: SET_VERSION,
  payload: {
    version,
  },
});


export const logRemoteSync = time => ({
  type: UPDATE_SYNC_TIME,
  payload: {
    time,
  },
});
