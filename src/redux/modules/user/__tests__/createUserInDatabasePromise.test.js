import createUserInDatabasePromise from '../createUserInDatabasePromise';


const input = createUserInDatabasePromise({ user: { uid: '123' } });
const assertion = () => expect(input).resolves.toEqual('123');
test('createUserInDatabasePromise', assertion);
