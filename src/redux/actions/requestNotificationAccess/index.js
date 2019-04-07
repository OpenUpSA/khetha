import { messaging } from '../../../helpers/functions/firebaseHelpers';
import { addNotificationToken } from '../../modules/info';

const requestNotificationAccess = () => (dispatch) => {
  if (!messaging.requestPermission) {
    return null;
  }

  const promise = messaging.requestPermission()
    .then(() => messaging.getToken())
    .then(token => dispatch(addNotificationToken(token)));

  return promise;
};

export default requestNotificationAccess;
