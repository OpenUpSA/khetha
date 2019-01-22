import { omit } from 'lodash';


const ADD = 'stories/ADD';
const REMOVE = 'storues/REMOVE';


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD: return {
      ...state,
      [action.payload.id]: action.payload.storyObject,
    };

    case REMOVE: return omit(state, action.payload.id);

    default: return state;
  }
};


const add = ({ id, storyObject }) => ({
  type: ADD,
  payload: {
    id, 
    storyObject,
  },
});


const remove = (id) => ({
  type: ADD,
  payload: {
    id, 
  },
});


export { add, remove };
export default reducer;
