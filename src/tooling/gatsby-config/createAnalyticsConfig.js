module.exports = trackingId => [
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId,
    },
  },
];
