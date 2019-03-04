import { auth, messaging } from '../../helpers/firebaseHelpers';
import { addUser, addNotificationToken, addPoints } from '../modules/info';
import { complete } from '../modules/answers';


const createUser = () => (dispatch) => {
  const promise = auth.signInAnonymously()
    .then(({ user }) => {
      const { uid: id } = user;
      return dispatch(addUser(id));
    });

  return promise;
};


const requestNotificationAccess = () => (dispatch) => {
  const promise = messaging.requestPermission()
    .then(() => messaging.getToken())
    .then(token => dispatch(addNotificationToken(token)));
  return promise;
};


const completeTask = (id, points) => (dispatch) => {
  dispatch(complete(id));
  dispatch(addPoints(points));
  return null;
};


export {
  createUser,
  requestNotificationAccess,
  completeTask,
};

export default {
  createUser,
  requestNotificationAccess,
  completeTask,
};
