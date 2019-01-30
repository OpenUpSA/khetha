const isHexColor = value => /^#[0-9a-fA-F]{6}/.test(value);


module.exports = ({ name, theme, background }) => {
  if (!name || !background || !theme) {
    return [];
  }

  if (!isHexColor(theme)) {
    throw new Error('"theme" is not a hex color in "starterpack.json"');
  }

  if (!isHexColor(background)) {
    throw new Error('"background" is not a hex color in "starterpack.json"');
  }

  return [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        icon: 'src/assets/meta/icon.png',
        short_name: name,
        start_url: '/',
        background_color: background,
        theme_color: theme,
        display: 'minimal-ui',
        gcm_sender_id: '103953800507',
      },
    },
  ];
};
