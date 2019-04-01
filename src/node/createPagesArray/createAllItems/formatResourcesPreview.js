const formatResourcesPreview = resources => resources.map((object) => {
  const url = Object.keys(object)[0];

  return {
    click: url,
    title: object[url].title,
  };
});


module.exports = formatResourcesPreview;
