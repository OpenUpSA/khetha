const SET_VERSION = 'storage/SET_VERSION';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_VERSION: return {
      ...state,
      version: action.payload.version,
    };

    default: return state;
  }
};


export const setVersion = ({ version }) => ({
  type: SET_VERSION,
  payload: {
    version,
  },
});
