// const createArrayForTemplates = require('./src/tooling/gatsby-node/createArrayForTemplates');
// const query = require('./src/tooling/gatsby-node/query');


// const createPagesFromArray = createPage => (array) => {
//   array.forEach(({ url, component, context }) => createPage({
//     url,
//     component,
//     context,
//   }));
// };


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   query({ graphql })
//     .then(createArrayForTemplates)
//     .then(createPagesFromArray(createPage));
// };
