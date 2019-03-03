const REPLACE_STATE = 'info/REPLACE_STATE';
const SET_ID = 'info/SET_ID';
const ADD_NOTIFICATION_TOKEN = 'info/ADD_NOTIFICATION_TOKEN';
const ADD_POINTS = 'info/ADD_POINTS';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case REPLACE_STATE: return action.payload.state;


    case SET_ID: return {
      ...state,
      id: action.payload.id,
      joined: action.payload.timestamp,
    };


    case ADD_NOTIFICATION_TOKEN: return {
      ...state,
      lastAction: action.payload.timestamp,
      notification: action.payload.token,
    };


    case ADD_POINTS: return {
      ...state,
      points: state.points + action.payload,
    };


    default: return state;
  }
};


const addUser = id => ({
  type: SET_ID,
  payload: {
    id,
    timestamp: new Date().getTime(),
  },
});


const addNotificationToken = token => ({
  type: ADD_NOTIFICATION_TOKEN,
  payload: {
    token,
    timestamp: new Date().getTime(),
  },
});


const addPoints = points => ({
  type: ADD_POINTS,
  payload: points,
});


export {
  addUser,
  addNotificationToken,
  addPoints,
};


export default reducer;
