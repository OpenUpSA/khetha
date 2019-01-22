const { param } = require('change-case');
const getFirstIntanceInArray = require('./getFirstIntanceInArray');


module.exports = ({ englishTitle, translations }) => (isoKey) => {
  const { translation } = getFirstIntanceInArray({ translations, isoKey });
  const fallback = isoKey !== 'eng' && !translation;
  const useEnglishTitle = isoKey === 'eng' || fallback;
  const title = useEnglishTitle ? englishTitle : translation;

  const values = {
    title,
    fallback,
    isoKey,
    url: `/${isoKey}/folders/${param(title)}/index.html`,
  };

  return values;
};
