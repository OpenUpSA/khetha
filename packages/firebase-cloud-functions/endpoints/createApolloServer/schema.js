const updateUserString = require('./updateUserString');
const userObjects = require('./userObjects');
const userStrings = require('./userStrings');


const {
  resolver: updateUserStringResolver,
  defs: updateUserStringDefs,
} = updateUserString;

const {
  resolver: userObjectsResolver,
  defs: userObjectsDefs,
} = userObjects;

const {
  resolver: userStringsResolver,
  defs: userStringsDefs,
} = userStrings;


const rootDefs = `
  type Mutation {
    test: Boolean
  }

  type Query {
    test: Boolean
  }
`;


const createTypeDefs = ({ gql }) => [
  gql(rootDefs),
];


const createResolvers = ({ firestore, messaging, serverPrivateKey }) => ({
  Mutation: {

    test: () => true,
  },
  Query: {

    test: () => true,
  },

});


module.exports = {
  createTypeDefs,
  createResolvers,
};
