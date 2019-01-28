import { mapValues } from 'lodash';


export default (response) => {
  const promise = new Promise((resolve) => {
    const data = response.data();
    const result = mapValues(data, value => JSON.parse(value));
    resolve(result);
  });

  return promise;
};
