const PropTypes = require('prop-types');
const createPageObject = require('./createPageObject');


const folder = PropTypes.shape({
  title: PropTypes.string,
  icon: PropTypes.string,
  translated_title: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string,
    translation: PropTypes.string,
  })),
});


const schema = {
  folders: PropTypes.arrayOf(folder).isRequired,
  isoKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  parseWith: PropTypes.func.isRequired,
};


module.exports = (props) => {
  PropTypes.checkPropTypes(schema, props, 'prop', 'parseListOfFolders');
  const { folders, isoKeys, parseWith } = props;

  const folderTranslations = folders.map(parseWith({ isoKeys }));
  const result = isoKeys.map(createPageObject(folderTranslations, isoKeys));
  return result;
};
