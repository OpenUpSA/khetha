const defs = `
  extend type Query {
    """
    Documentation pending...
    """
    userStrings(id: String): [String]
  }
`;


const resolver = ({ firestore }) => (_, { id }) => {
  if (id) {
    return firestore
      .collection('users')
      .doc(id)
      .get()
      .then(response => response.data())
      .then(({ jsonString }) => [jsonString]);
  }

  return firestore
    .collection('users')
    .get()
    .then(response => response.docs.map(doc => doc.data()))
    .then(response => response.map(({ jsonString }) => jsonString));
};


const output = {
  defs,
  resolver,
};


module.exports = output;
