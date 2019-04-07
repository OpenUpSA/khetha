/* eslint-disable import/no-extraneous-dependencies */
const { config } = require('dotenv');

const createFilesystemConfig = require('./src/scripts/createGatsbyConfig/createFilesystemConfig');
const createNetlifyCmsConfig = require('./src/scripts/createGatsbyConfig/createNetlifyCmsConfig');
const manifestConfig = require('./src/scripts/createGatsbyConfig/manifestConfig');
const createHotjarConfig = require('./src/scripts/createGatsbyConfig/createHotjarConfig');
const createAnalyticsConfig = require('./src/scripts/createGatsbyConfig/createAnalyticsConfig');
const createSentryConfig = require('./src/scripts/createGatsbyConfig/createSentryConfig');


const {
  HOTJAR_ID,
  GOOGLE_ANALYTICS_ID,
  SENTRY_DNS,
  HOTJAR_SNIPPET_VERSION,
} = config();


module.exports = {
  siteMetadata: {
    title: 'Khetha',
    siteUrl: 'https://khetha.org.za',
  },
  plugins: [
    'gatsby-plugin-polyfill-io',
    createFilesystemConfig(__dirname),
    createNetlifyCmsConfig(__dirname),
    manifestConfig,
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [
          'Object.entries',
          'Set',
          'WeakSet',
          'Map',
          'WeakMap',
        ],
      },
    },
    'gatsby-plugin-polyfill-io',
    '@wapps/gatsby-plugin-material-ui',
    'gatsby-plugin-i18n',
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Roboto:bold'],
        },
      },
    },
  ],
};
