const createTranslationsProp = (result, isoKey) => ({
  ...result,
  [isoKey]: {
    url: `/${isoKey}/folders/index.html`,
  },
});


module.exports = (folderTranslations, isoKeys) => isoKey => ({
  component: 'src/templates/listOfFolders',
  url: `/${isoKey}/folders/index.html`,
  context: {
    meta: {
      isoKey,
      urls: isoKeys.reduce(createTranslationsProp, {}),
    },
    folders: folderTranslations.map(folder => (
      folder.filter(translation => translation.isoKey === isoKey)
    )),
  },
});
