import { initStateFromRemote } from '../index';
import parseResponse from '../parseResponse';
import handleMerge from '../handleMerge';
import updateEntireState from '../updateEntireState';
import * as user from '../../modules/user';


const dispatch = jest.fn();
dispatch.mockReturnValue(new Promise(resolve => resolve()));

jest.mock('../../modules/user');
user.createGuestAccount.mockReturnValue(value => value);

jest.mock('../parseResponse');
parseResponse.mockReturnValue(true);

jest.mock('../handleMerge');
handleMerge.mockReturnValue(true);

jest.mock('../updateEntireState');
updateEntireState.mockReturnValue({ test: true });


const getState = jest.fn();
getState.mockReturnValue({
  user: {
    id: {
      value: '1234567890',
    },
  },
});


const output = {
  test: true,
};


const input = initStateFromRemote()(dispatch, getState);
const assertion = () => expect(input).resolves.toEqual(output);


test('initStateFromRemote', assertion);
