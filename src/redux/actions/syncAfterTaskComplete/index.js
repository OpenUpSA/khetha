import completeTask from '../completeTask';
import syncState from '../syncState';

const syncAfterTaskComplete = (id, points) => (dispatch, getState) => {
  completeTask(id, points)(dispatch);
  return syncState()(dispatch, getState);
};

export default syncAfterTaskComplete;
