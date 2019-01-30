import { createGuestAccount } from '../index';
import createUserInDatabasePromise from '../createUserInDatabasePromise';


const dispatch = jest.fn();
jest.mock('../createUserInDatabasePromise');
createUserInDatabasePromise.mockReturnValue('123');


const input = createGuestAccount()(dispatch);
const assertion = () => expect(input).resolves.toEqual('123');
test('user: createGuestAccount', assertion);
