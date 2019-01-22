/* eslint-disable import/no-extraneous-dependencies */
const { config } = require('dotenv');

const starterpack = require('./starterpack.json');
const createFilesystemConfig = require('./src/tooling/gatsby-config/createFilesystemConfig');
const netlifyCmsConfig = require('./src/tooling/gatsby-config/netlifyCmsConfig');
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
    siteUrl: 'https://pocketreporter.netlify.com',
  },
  plugins: [
    netlifyCmsConfig,
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
    'gatsby-transformer-remark',
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
  mapping: {
    'MarkdownRemark.frontmatter.translated_resource_link': 'MarkdownRemark.frontmatter.translated_resource_title',
    'MarkdownRemark.frontmatter.translated_question_link': 'MarkdownRemark.frontmatter.translated_question_title',
    'MarkdownRemark.frontmatter.resource_link': 'MarkdownRemark.frontmatter.resource_title',
    'MarkdownRemark.frontmatter.question_link': 'MarkdownRemark.frontmatter.question_title',
    'MarkdownRemark.frontmatter.resource_translations_link': 'MarkdownRemark.frontmatter.resource_title',
    'MarkdownRemark.frontmatter.question_translations_link': 'MarkdownRemark.frontmatter.question_title',
  },
};
