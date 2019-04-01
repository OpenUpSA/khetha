const createResources = isoKey => (object) => {
  if (!object) {
    return null;
  }

  const {
    title,
    body,
  } = object || {};

  if (isoKey === 'eng') {
    return {
      [`${isoKey}/resources/${title}/index.html`]: {
        type: 'resource',
        fallback: false,
        isoKey,
        title,
        body,
      },
    };
  }

  if (!object[isoKey] || !object[isoKey].title) {
    return {
      [`${isoKey}/resources/${title}/index.html`]: {
        type: 'resource',
        fallback: true,
        isoKey,
        title,
        body,
      },
    };
  }

  return {
    [`${isoKey}/resources/${object[isoKey].title}/index.html`]: {
      type: 'resource',
      fallback: false,
      isoKey,
      title: object[isoKey].title,
      body: object[isoKey].body,
    },
  };
};


module.exports = createResources;
