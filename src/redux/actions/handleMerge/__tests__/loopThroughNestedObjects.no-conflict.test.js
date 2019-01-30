import loopThroughNestedObjects from '../loopThroughNestedObjects';


const remote = {
  storage: {
    synced: {
      timestamp: new Date().getTime(),
      value: new Date().getTime(),
    },
    version: 1,
  },
  user: {
    language: {
      timestamp: new Date().getTime(),
      value: 'zu',
    },
    id: {
      timestamp: new Date().getTime(),
      value: 'cb12b1dc-08a1-4024-aa56-24a7aa8f17b8',
    },
    notifications: {
      timestamp: new Date().getTime(),
      value: true,
    },
  },
  tasks: {
    personal: {
      timestamp: new Date().getTime(),
      value: {
        answers: [
          true,
          true,
          false,
          true,
          false,
        ],
        total: 13,
      },
    },
    other: {
      timestamp: new Date().getTime(),
      value: {
        answers: [
          true,
          true,
          false,
          true,
        ],
        progress: 4,
      },
    },
  },
};


const local = {
  storage: {
    synced: {
      timestamp: new Date().getTime() / 2,
      value: new Date().getTime() / 2,
    },
    version: 1,
  },
  user: {
    language: {
      timestamp: new Date().getTime() / 2,
      value: 'en',
    },
    id: {
      timestamp: new Date().getTime() / 2,
      value: 'cb12b1dc-08a1-4024-aa56-24a7aa8f17b8',
    },
    notifications: {
      timestamp: new Date().getTime() / 2,
      value: false,
    },
  },
  tasks: {},
};

const input = loopThroughNestedObjects(local, remote);
const assertion = () => expect(input).toEqual(remote);
test('updateLocal: pass', assertion);
