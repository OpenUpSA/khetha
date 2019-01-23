import { omit } from 'lodash';


const MARK_DONE = 'tasks/MARK_DONE';
const UPDATE_PROGRESS = 'tasks/UPDATE_PROGRESS';
const REMOVE_PROGRESS = 'tasks/REMOVE_PROGRESS';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case MARK_DONE: return {
      ...state,
      completed: [
        ...state.completed,
        action.payload.id,
      ],
    };

    case REMOVE_PROGRESS: return {
      ...state,
      progress: {
        ...omit(state.progress, action.payload.id),
      },
    };

    case UPDATE_PROGRESS: return {
      ...state,
      progress: {
        ...state.progress,
        [action.payload.id]: action.payload.object,
      },
    };

    default: return state;
  }
};


export const markAsDone = ({ id }) => ({
  type: MARK_DONE,
  payload: {
    id,
  },
});


export const removeFromProgress = ({ id }) => ({
  type: REMOVE_PROGRESS,
  payload: {
    id,
  },
});


export const updateProgress = ({ id, object }) => ({
  type: UPDATE_PROGRESS,
  payload: {
    id,
    object,
  },
});


export const completeTask = ({ id }) => (dispatch) => {
  dispatch(removeFromProgress({ id }));
  dispatch(markAsDone({ id }));
};
