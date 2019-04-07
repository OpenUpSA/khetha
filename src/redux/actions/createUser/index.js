import { auth } from '../../../helpers/functions/firebaseHelpers';
import { addUser } from '../../modules/info';

const createUser = () => (dispatch) => {
  const promise = auth.signInAnonymously()
    .then(({ user }) => {
      const { uid: id } = user;
      return dispatch(addUser(id));
    });

  return promise;
};

export default createUser;
