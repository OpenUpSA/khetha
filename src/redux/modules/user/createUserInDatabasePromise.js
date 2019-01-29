import { fireStore } from '../../../helpers/firebase';


export default ({ user }) => new Promise((resolve) => {
  const { uid: id } = user;

  const result = fireStore
    .collection('users')
    .doc(id)
    .set({
      storage: '{}',
      user: '{}',
      tasks: '{}',
    })
    .then(() => resolve(id));

  return result;
});
