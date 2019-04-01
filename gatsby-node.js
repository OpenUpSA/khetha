/* eslint-disable no-shadow */
const { resolve } = require('path');


const createPagesArray = require('./src/node/createPagesArray');
const query = require('./src/node/createPagesArray/query');


const convertTemplatesToAbsolutePath = (data) => {
  const result = data.map(({ component, ...items }) => {
    const innerResult = { component: resolve(component), ...items };
    return innerResult;
  });

  return result;
};

exports.createPages = ({ graphql, actions }) => new Promise((resolve) => {
  const { createPage } = actions;

  graphql(query)
    .then(createPagesArray)
    .then(convertTemplatesToAbsolutePath)
    .then(data => data.forEach(pageProps => createPage(pageProps)))
    .then(resolve);
});
