import { blankArray } from '../../../helpers/randomizer';


const CREATE = 'answers/CREATE';
const UPDATE = 'answers/UPDATE';
const COMPLETE = 'answers/COMPLETE';


const getTimestamp = () => new Date().getTime();

const createAnswerObject = question => ({
  question,
  answer: null,
  edits: 0,
  firstAnswered: null,
  lastEdit: null,
});


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CREATE: return {
      ...state,
      [action.payload.id]: {
        answers: action.payload.questionsArray.map(createAnswerObject),
        lastEdit: null,
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


const create = (id, questionsArray) => ({
  type: CREATE,
  payload: {
    id,
    questionsArray,
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
