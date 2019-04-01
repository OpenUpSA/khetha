const createQuestions = isoKey => (object) => {
  if (!object) {
    return null;
  }

  const {
    title,
    questions,
  } = object;

  if (isoKey === 'eng') {
    return {
      type: 'question',
      fallback: false,
      isoKey,
      title,
      questions,
    };
  }

  if (!object[isoKey] || !object[isoKey].title) {
    return {
      type: 'question',
      fallback: true,
      isoKey,
      title,
      questions,
    };
  }

  return {
    type: 'resource',
    fallback: false,
    isoKey,
    title: object[isoKey].title,
    questions: object[isoKey].questions,
  };
};


module.exports = createQuestions;
