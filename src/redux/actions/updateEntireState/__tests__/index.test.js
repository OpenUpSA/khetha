import * as replaceStorage from '../../../modules/storage';
import * as replaceUser from '../../../modules/user';
import * as replaceTasks from '../../../modules/tasks';
import updateEntireState from '../index';


const dispatch = jest.fn(value => value);
replaceStorage.replaceEntireState = jest.fn(value => value);
replaceUser.replaceEntireState = jest.fn(value => value);
replaceTasks.replaceEntireState = jest.fn(value => value);


const params = { storage: 'storage', user: 'user', tasks: 'tasks' };
const input = updateEntireState(params)(dispatch);
const assertion = () => expect(input).toEqual(params);
test('updateEntireState', assertion);
