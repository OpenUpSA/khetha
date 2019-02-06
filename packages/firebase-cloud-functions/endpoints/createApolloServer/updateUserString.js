const defs = `
  extend type Mutation  {
    """
    Documentation pending...
    """
    updateUserString (id: String!, jsonString: String!, create: Boolean): String!
  }
`;


const resolver = ({ firestore }) => (_, { id, jsonString, create }) => {
  if (create) {
    return firestore
      .collection('users')
      .doc(id)
      .create({ jsonString })
      .then(() => id);
  }

  return firestore
    .collection('users')
    .doc(id)
    .update({ jsonString })
    .then(() => ({ id }));
};


const output = {
  defs,
  resolver,
};


module.exports = output;
