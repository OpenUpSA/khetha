import handleMerge from '../index';
import calcIfUpdate from '../calcIfUpdate';
import loopThroughNestedObjects from '../loopThroughNestedObjects';


jest.mock('../calcIfUpdate');
jest.mock('../loopThroughNestedObjects');


calcIfUpdate.mockReturnValue(true);
loopThroughNestedObjects.mockReturnValue('merged');


const input = handleMerge({ local: 'local' })({ remote: 'remote' });


const assertion = done => input.then((response) => {
  expect(response).toEqual({ merged: 'merged' });
  done();
});


test('handleMerge', assertion);
