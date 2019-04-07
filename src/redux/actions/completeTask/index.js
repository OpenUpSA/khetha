import { complete } from '../../modules/answers';
import { addPoints } from '../../modules/info';

const completeTask = (id, points) => (dispatch) => {
  dispatch(complete(id));
  dispatch(addPoints(points));
  return null;
};

export default completeTask;
