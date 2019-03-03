import { blankArray } from '../../../helpers/randomizer';


const CREATE = 'answers/CREATE';
const UPDATE = 'answers/UPDATE';
const COMPLETE = 'answers/COMPLETE';


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CREATE: return {
      ...state,
      [action.payload.id]: {
        data: action.payload.answers,
        completed: false,
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
        completed: true,
      },
    };


    default: return state;
  }
};


const create = (id, length) => ({
  type: CREATE,
  payload: {
    id,
    answers: blankArray(length),
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
