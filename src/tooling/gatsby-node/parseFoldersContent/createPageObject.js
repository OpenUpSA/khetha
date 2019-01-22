const generateQuestions = require('./generateQuestions');
const generateResources = require('./generateResources');


module.exports = outerProps => (props) => {
  const {
    folderArray,
    folders,
    index,
  } = outerProps;

  const {
    fallback,
    isoKey,
    title,
    url,
  } = props;

  const urls = folderArray.reduce(
    (result, { isoKey: key, url: value }) => ({
      ...result,
      [key]: value,
    }),
    {},
  );

  const generateParams = {
    isoKey,
    folders,
    index,
  };

  const questions = generateQuestions(generateParams);
  const resources = generateResources(generateParams);

  const result = {
    component: 'src/templates/folderContents',
    url,
    context: {
      title,
      icon: folders[index].icon,
      meta: {
        fallback,
        isoKey,
        urls,
      },
      content: {
        resources,
        questions,
      },
    },
  };

  return result;
};
