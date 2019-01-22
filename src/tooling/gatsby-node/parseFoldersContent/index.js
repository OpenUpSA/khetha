const { flatten } = require('lodash');
const createPageObject = require('./createPageObject');


module.exports = (props) => {
  const { folders, isoKeys, parseWith } = props;
  const folderTranslations = folders.map(parseWith({ isoKeys }));

  const result = folderTranslations.map((folderArray, index) => (
    folderArray.map(createPageObject({
      folders,
      folderArray,
      index,
    }))
  ));

  return flatten(result);
};
