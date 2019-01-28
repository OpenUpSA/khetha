import { initStateFromRemote } from '../index';
import parseResponse from '../parseResponse';
import handleMerge from '../handleMerge';
import updateEntireState from '../updateEntireState';


const dispatch = jest.fn();
dispatch.mockImplementation(value => value);


jest.mock('../parseResponse');
parseResponse.mockReturnValue(true);

jest.mock('../handleMerge');
handleMerge.mockReturnValue(true);

jest.mock('../updateEntireState');
updateEntireState.mockReturnValue({ test: true });


const output = {
  user: {
    value: null,
  },
};


const getState = jest.fn();
getState.mockReturnValue(output);


const input = initStateFromRemote()(dispatch, getState);
const assertion = () => expect(input).resolves.toEqual(output);


test('initStateFromRemote', assertion);
