const { param } = require('change-case');
const { languageToIso } = require('../../../helpers/languageConversions/index.node');


module.exports = (props) => {
  const {
    isoKey,
    folders,
    index,
  } = props;


  const resources = folders[index].translated_resource_link.map(
    ({ frontmatter }) => {
      const translations = frontmatter.resource_link;

      const {
        language,
        resource_title: translatedTitle,
      } = translations.frontmatter;

      const englishTitle = frontmatter.translated_resource_title;
      const fallback = isoKey !== 'eng' && languageToIso(language) !== isoKey;
      const useEnglish = isoKey === 'eng' || fallback;

      const title = useEnglish ? englishTitle : translatedTitle;

      return {
        title,
        url: `${isoKey}/resources/${param(title)}`,
        fallback,
      };
    },
  );


  return resources;
};
