module.exports = root => ({
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${root}/src/cms/index.js`,
    manualInit: true,
  },
});
