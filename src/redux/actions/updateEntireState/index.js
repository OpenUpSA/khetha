import { replaceEntireState as replaceUser } from '../../modules/user';
import { replaceEntireState as replaceStorage } from '../../modules/storage';
import { replaceEntireState as replaceTasks } from '../../modules/tasks';


export default ({ storage, user, tasks }) => (dispatch) => {
  dispatch(replaceStorage({ state: storage }));
  dispatch(replaceUser({ state: user }));
  dispatch(replaceTasks({ state: tasks }));
  return { storage, user, tasks };
};
