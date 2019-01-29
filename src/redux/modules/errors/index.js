import getUniqueKey from 'uuid/v4';


const ADD = 'errors/ADD';
const REMOVE = 'errors/REMOVE';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case ADD: return {
      ...state,
      queued: [
        ...state.queued,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          buttons: action.payload.buttons,
        },
      ],
    };

    case REMOVE: return {
      ...state,
      queued: state.queued.filter(({ id }) => id !== action.payload.id),
    };

    default: return state;
  }
};


export const add = (props) => {
  const {
    id,
    title,
    description,
    buttons,
  } = props;

  return {
    type: ADD,
    payload: {
      id,
      title,
      description,
      buttons,
    },
  };
};


export const remove = ({ id }) => ({
  type: REMOVE,
  payload: id,
});


export const create = ({ title, description, buttons }) => (dispatch) => {
  const id = getUniqueKey();

  const promise = new Promise((resolve) => {
    dispatch(add({
      id,
      title,
      description,
      buttons,
    }));

    resolve();
  });

  return { id, promise };
};
