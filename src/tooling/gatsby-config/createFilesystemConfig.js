module.exports = root => ({
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'data',
    path: `${root}/src/data/`,
  },
});
