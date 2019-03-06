const LOG_SYNC = 'storage/LOG_SYNC';


const getTimestamp = () => new Date().getTime();


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOG_SYNC: return {
      ...state,
      synced: getTimestamp(),
    };

    default: return state;
  }
};


const logStateSync = time => ({
  type: LOG_SYNC,
  payload: {
    time,
  },
});


export {
  logStateSync,
};


export default reducer;
