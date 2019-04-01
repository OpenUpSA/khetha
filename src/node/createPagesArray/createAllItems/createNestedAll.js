/* eslint-disable import/no-extraneous-dependencies */


const { kebab } = require('change-case');


const createResources = require('./createResources');
const createQuestions = require('./createQuestions');
const formatResourcesPreview = require('./formatResourcesPreview');


const createNestedAll = (isoKeys, dataSource) => {
  const result = isoKeys.map(isoKey => dataSource.map((object) => {
    if (!object) {
      return null;
    }

    const resources = object.resources ? object.resources.map(createResources(isoKey)) : [];
    const questions = object.questions ? object.questions.map(createQuestions(isoKey)) : [];


    const addParentLinks = (items, parentUrl) => items.map((innerObject) => {
      const key = Object.keys(innerObject)[0];
      const newValue = {
        [key]: {
          ...innerObject[key],
          parentUrl,
        },
      };

      return newValue;
    });

    const {
      title,
      translations,
      icon,
    } = object;

    if (isoKey === 'eng') {
      const link = `/${isoKey}/folders/${kebab(title)}/index.html`;
      return [
        {
          [`/${isoKey}/folders/index.html`]: {
            type: 'folder',
            isoKey,
            folders: [{
              icon,
              title,
              click: link,
            }],
          },
        },
        {
          [link]: {
            type: 'content',
            title,
            isoKey,
            fallback: false,
            icon,
            resources: formatResourcesPreview(resources),
            questions,
          },
        },
        ...addParentLinks(resources, link),
      ];
    }

    if (!translations[isoKey]) {
      const link = `/${isoKey}/folders/${kebab(title)}/index.html`;
      return [
        {
          [`/${isoKey}/folders/index.html`]: {
            type: 'folder',
            isoKey,
            folders: [{
              icon,
              title,
              click: link,
            }],
          },
        },
        {
          [link]: {
            type: 'content',
            isoKey,
            fallback: true,
            title,
            icon,
            resources: formatResourcesPreview(resources),
            questions,
          },
        },
        ...addParentLinks(resources, link),
      ];
    }

    const link = `/${isoKey}/folders/${translations[kebab(isoKey)]}/index.html`;
    return [
      {
        [`/${isoKey}/folders/index.html`]: {
          type: 'folder',
          isoKey,
          folders: [{
            icon,
            title: translations[isoKey],
            click: link,
          }],
        },
      },
      {
        [link]: {
          type: 'content',
          title: translations[isoKey],
          isoKey,
          fallback: false,
          icon,
          resources: formatResourcesPreview(resources),
          questions,
        },
      },
      ...addParentLinks(resources, link),
    ];
  }));

  return result;
};


module.exports = createNestedAll;
