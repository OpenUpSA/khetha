import createUserInDatabasePromise from '../createUserInDatabasePromise';


const input = createUserInDatabasePromise({ user: { id: { value: '123' } } });
const assertion = () => expect(input).resolves.toEqual('123');
test('createUserInDatabasePromise', assertion);
