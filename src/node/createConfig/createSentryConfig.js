module.exports = ({ dsn }) => {
  if (!dsn) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn,
      },
    },
  ];
};
