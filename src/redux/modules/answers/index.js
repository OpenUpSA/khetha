import { blankArray } from '../../../helpers/randomizer';


const CREATE = 'answers/CREATE';
const UPDATE = 'answers/UPDATE';
const COMPLETE = 'answers/COMPLETE';


const getTimestamp = () => new Date().getTime();


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CREATE: return {
      ...state,
      [action.payload.id]: {
        data: blankArray(action.payload.length),
        completed: null,
        started: getTimestamp(),
      },
    };


    case UPDATE: return {
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        data: action.payload.answers,
      },
    };


    case COMPLETE: return {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        completed: getTimestamp(),
      },
    };


    default: return state;
  }
};


const create = (id, length) => ({
  type: CREATE,
  payload: {
    id,
    length,
  },
});


const update = (id, answers) => ({
  type: UPDATE,
  payload: {
    id,
    answers,
  },
});


const complete = id => ({
  type: COMPLETE,
  payload: id,
});


export {
  create,
  update,
  complete,
};


export default reducer;
