const defs = `
  extend type Query {
    """
    Documentation pending...
    """
    userObjects(id: String): [UserObject]
  }

  type Timestamp_String {
    """
    Documentation pending...
    """
    timestamp: String,
    """
    Documentation pending...
    """
    value: String
  }

  type Timestamp_String_Array {
    """
    Documentation pending...
    """
    timestamp: String,
    """
    Documentation pending...
    """
    value: [String]
  }

  type Info {
    """
    Documentation pending...
    """
    id: String,
    """
    Documentation pending...
    """
    joined: String,
    """
    Documentation pending...
    """
    language: Timestamp_String,
    """
    Documentation pending...
    """
    notifications: Timestamp_String_Array
  }

  type Storage {
    """
    Documentation pending...
    """
    version: Int,
    """
    Documentation pending...
    """
    synced: String,
  }

  type Answer {
    """
    Documentation pending...
    """
    timestamp: String
    """
    Documentation pending...
    """
    value: String
  }

  type Task {
    """
    Documentation pending...
    """
    id: String
    """
    Documentation pending...
    """
    started: String
    """
    Documentation pending...
    """
    completed: String
    """
    Documentation pending...
    """
    total: Int
    """
    Documentation pending...
    """
    answers: [Answer]
  }

  type UserObject {
    """
    Documentation pending...
    """
    storage: Storage
    info: Info
    tasks: [Task]
  }
`;


const resolver = ({ firestore }) => (_, { id }) => {
  if (id) {
    return firestore
      .collection('users')
      .doc(id)
      .get()
      .then(response => response.data())
      .then(({ jsonString }) => [JSON.parse(jsonString)]);
  }

  return firestore
    .collection('users')
    .get()
    .then(response => response.docs.map(doc => doc.data()))
    .then(response => response.map(({ jsonString }) => JSON.parse(jsonString)));
};


const output = {
  defs,
  resolver,
};


module.exports = output;
