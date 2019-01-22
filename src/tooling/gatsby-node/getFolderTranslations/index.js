const PropTypes = require('prop-types');
const addTranslations = require('./addTranslations');


const schema = {
  isoKeys: PropTypes.arrayOf(PropTypes.string),
};


const innerSchema = {
  title: PropTypes.string.isRequired,
  translations: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string,
    translation: PropTypes.string,
  })).isRequired,
};


module.exports = props => (innerProps) => {
  PropTypes.checkPropTypes(schema, props);
  PropTypes.checkPropTypes(innerSchema, innerProps, 'prop', 'getFolderTranslations');

  const { isoKeys } = props;
  const { title: englishTitle, translations } = innerProps;
  const translationsArray = isoKeys.map(addTranslations({ englishTitle, translations }));
  return translationsArray;
};
