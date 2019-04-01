module.exports = ({ id, sv }) => {
  if (!id || !sv) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id,
        sv,
      },
    },
  ];
};
