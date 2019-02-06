/* eslint-disable import/no-extraneous-dependencies */
const { config } = require('dotenv');
const createFilesystemConfig = require('./src/tooling/gatsby-config/createFilesystemConfig');
const manifestConfig = require('./src/tooling/gatsby-config/manifestConfig');
const createHotjarConfig = require('./src/tooling/gatsby-config/createHotjarConfig');
const createAnalyticsConfig = require('./src/tooling/gatsby-config/createAnalyticsConfig');
const createSentryConfig = require('./src/tooling/gatsby-config/createSentryConfig');


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
    manifestConfig,
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
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
