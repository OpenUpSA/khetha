/* eslint-disable import/no-extraneous-dependencies */


const createFilesystemConfig = require('./createFilesystemConfig');
const createNetlifyCmsConfig = require('./createNetlifyCmsConfig');
const manifestConfig = require('./manifestConfig');
const createHotjarConfig = require('./createHotjarConfig');
const createAnalyticsConfig = require('./createAnalyticsConfig');
const createSentryConfig = require('./createSentryConfig');


const mapping = {
  'FoldersJson.questions': 'QuestionsJson.title',
  'FoldersJson.resources': 'ResourcesJson.title',
};


module.exports = (props) => {
  const {
    id,
    sv,
    trackingId,
    dsn,
    root,
  } = props;

  return {
    siteMetadata: {
      title: 'Pocket Reporter',
      siteUrl: 'https://pocketreporter.co.za',
    },
    plugins: [
      manifestConfig,
      createNetlifyCmsConfig(root),
      createFilesystemConfig(root),
      ...(createHotjarConfig({ id, sv })),
      ...(createAnalyticsConfig({ trackingId })),
      ...(createSentryConfig({ dsn })),
      'gatsby-transformer-json',
      'gatsby-plugin-i18n',
      '@wapps/gatsby-plugin-material-ui',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-offline',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-netlify',
    ],
    mapping,
  };
};
