import { fireStore } from '../../helpers/firebase';
import handleMerge from './handleMerge';
import createDispatchPipe from '../../helpers/createDispatchPipe';
import { createGuestAccount, setUserValue } from '../modules/user';
import parseResponse from './parseResponse';
import updateEntireState from './updateEntireState';

const PARSE_REMOTE = 'PARSE_REMOTE';
const LOG_MERGED_DATA = 'LOG_MERGED_DATA';
const SYNCED_WITH_REMOTE = 'SYNCED_WITH_REMOTE';


export const syncWithRemote = () => (dispatch, getState) => {
  const local = getState();
  const { value: id } = local.user.id;
  const keys = ['storage', 'user', 'tasks'];
  const modifiedLocal = {
    ...local,
    user: {
      ...local.user,
      synced: {
        timestamp: new Date().getTime(),
        value: new Date().getTime(),
      },
    },
  };

  const localAsStrings = keys.reduce(
    (result, key) => ({ ...result, [key]: JSON.stringify(modifiedLocal[key]) }),
    {},
  );

  return fireStore
    .collection('users')
    .doc(id)
    .update(localAsStrings)
    .then(() => dispatch({ type: SYNCED_WITH_REMOTE }));
};


export const initStateFromRemote = () => (dispatch, getState) => {
  const localState = getState();
  const { id: idObject } = localState.user || {};
  const { value: id } = idObject || {};

  const local = {
    storage: localState.storage,
    user: localState.user,
    task: localState.task,
  };

  const dispatchPipe = createDispatchPipe(dispatch);
  const logParsePipe = dispatchPipe({ type: PARSE_REMOTE });
  const handleMergePipe = handleMerge({ local });
  const logMergePipe = dispatchPipe({ type: LOG_MERGED_DATA });

  const promise = new Promise((resolve) => {
    if (!id) {
      return dispatch(createGuestAccount())
        .then((responseId) => {
          dispatch(setUserValue({ id: responseId }));
          dispatch(setUserValue({ joinedDate: new Date().getTime() }));
          resolve(getState());
        });
    }

    return fireStore
      .collection('users')
      .doc(id)
      .get()
      .then(parseResponse)
      .then(logParsePipe)
      .then(handleMergePipe)
      .then(logMergePipe)
      .then(updateEntireState)
      .then(resolve);
  });

  return promise;
};


export default {
  updateEntireState,
  initStateFromRemote,
};
