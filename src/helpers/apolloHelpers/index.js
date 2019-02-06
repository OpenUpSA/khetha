import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { uri } from '../../config/api.json';

const api = new ApolloClient({ uri });

const get = ({ query: queryString, variables }) => {
  const result = api.query({ query: gql(queryString), variables });
  return result;
};

const send = ({ mutation: mutationString, variables }) => {
  const result = api.mutate({ mutation: gql(mutationString), variables });
  return result;
};


export { api, get, send };
export default { api, get, send };
