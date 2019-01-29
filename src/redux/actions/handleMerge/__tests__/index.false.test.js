import handleMerge from '../index';
import calcIfUpdate from '../calcIfUpdate';
import loopThroughNestedObjects from '../loopThroughNestedObjects';


jest.mock('../calcIfUpdate');
jest.mock('../loopThroughNestedObjects');


calcIfUpdate.mockReturnValue(false);
loopThroughNestedObjects.mockReturnValue('merged');


const input = handleMerge({ local: 'local' })({ remote: 'remote' });


const assertion = done => input.then((response) => {
  expect(response).toEqual({ merged: 'local' });
  done();
});


test('handleMerge', assertion);
