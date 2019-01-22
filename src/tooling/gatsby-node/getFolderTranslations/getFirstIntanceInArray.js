const { isoToLanguage } = require('../../../helpers/languageConversions/index.node');


const findLanguageInArray = isoKey => ({ language }) => language === isoToLanguage(isoKey);

module.exports = ({ translations, isoKey }) => {
  const resultArray = translations.filter(findLanguageInArray(isoKey));
  return resultArray[0] || false;
};
