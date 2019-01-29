import calcIfUpdate from '../calcIfUpdate';

const local = {
  storage: {
    synced: {
      timestamp: new Date().getTime() * 2,
      value: new Date().getTime() * 2,
    },
  },
};

const remote = {
  storage: {
    synced: {
      timestamp: new Date().getTime(),
      value: new Date().getTime(),
    },
  },
};


const assertion = () => expect(calcIfUpdate(local, remote)).toEqual(false);


test('calcIfUpdate: false', assertion);
