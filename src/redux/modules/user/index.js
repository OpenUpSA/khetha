import generateUniqueKey from 'uuid/v4';
import languages from '../../../config/languages.json';


const SET_LANGUAGE = 'user/SET_LANGUAGE';
const SET_ID = 'user/SET_ID';


const isoKeys = Object.keys(languages);


export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_LANGUAGE: return {
      ...state,
      language: action.payload.isoKey,
    };

    case SET_ID: return {
      ...state,
      id: action.payload.id,
    };

    default: return state;
  }
};


export const changeLanguage = ({ isoKey }) => {
  if (isoKeys.filter(key => key === isoKey).length < 1) {
    return new Error('Invalid ISO 639-2 language Code supplied to "isoKey"');
  }

  return {
    type: SET_LANGUAGE,
    payload: {
      isoKey,
    },
  };
};


export const createUserId = () => ({
  type: SET_ID,
  payload: {
    id: generateUniqueKey(),
  },
});
