/* eslint-disable import/no-extraneous-dependencies */
const { config } = require('dotenv');

const starterpack = require('./starterpack.json');
const createFilesystemConfig = require('./src/tooling/gatsby-config/createFilesystemConfig');
const buildManifestConfig = require('./src/tooling/gatsby-config/buildManifestConfig');
const createHotjarConfig = require('./src/tooling/gatsby-config/createHotjarConfig');
const createAnalyticsConfig = require('./src/tooling/gatsby-config/createAnalyticsConfig');
const createSentryConfig = require('./src/tooling/gatsby-config/createSentryConfig');


const {
  name: nameValue,
  background: backgroundValue,
  theme: themeValue,
} = starterpack;


const {
  HOTJAR_ID,
  GOOGLE_ANALYTICS_ID,
  SENTRY_DNS,
  HOTJAR_SNIPPET_VERSION,
} = config();


module.exports = {
  siteMetadata: {
    title: nameValue,
    siteUrl: 'https://kheta.org.za',
  },
  plugins: [
    createFilesystemConfig(__dirname),
    ...(buildManifestConfig({
      name: nameValue,
      theme: themeValue,
      background: backgroundValue,
    })),
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
    '@wapps/gatsby-plugin-material-ui',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
  ],
};
