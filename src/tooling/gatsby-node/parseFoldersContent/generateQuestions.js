const { languageToIso } = require('../../../helpers/languageConversions/index.node');


module.exports = (props) => {
  const {
    isoKey,
    folders,
    index,
  } = props;

  const rawQuestions = folders[index].translated_question_link;

  const result = rawQuestions.map(
    ({ frontmatter }) => {
      const {
        language,
        translated_question_title: englishTitle,
        question_link: rawEnglishQuestions,
        question_translations_link: translations,
      } = frontmatter;

      const translation = translations
        .filter(object => !!object)
        .find(({ frontmatter: innerFm }) => (
          languageToIso(innerFm.language) === isoKey
        ));

      const englishQuestions = rawEnglishQuestions && rawEnglishQuestions.frontmatter.questions;
      const title = translation ? translation.frontmatter.question_title : englishTitle;
      const questions = translation ? translation.frontmatter.questions : englishQuestions;

      const fallback = isoKey !== 'eng' && languageToIso(language) !== isoKey;

      return {
        title,
        questions,
        fallback,
      };
    },
  );

  return result.filter(({ questions }) => !!questions);
};
