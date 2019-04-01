/* eslint-disable import/no-extraneous-dependencies */


const { flatten } = require('lodash');


const languages = require('../../../config/languages');
const createNestedAll = require('./createNestedAll');


const isoKeys = Object.keys(languages);


const createAllItems = (response) => {
  const foldersArray = response.data.allFoldersJson.edges.map(({ node }) => node);
  const nestedAllItems = createNestedAll(isoKeys, foldersArray);
  const result = flatten(flatten((nestedAllItems))).filter(value => !!value);
  return result;
};


module.exports = createAllItems;
