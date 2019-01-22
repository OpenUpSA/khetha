const { flatten } = require('lodash');
const { param } = require('change-case');
const { languageToIso } = require('../../../helpers/languageConversions/index.node');


const doesExist = value => !!value;


module.exports = ({ folders, isoKeys }) => {
  const translationObjects = folders.map(
    ({ translated_resource_link: resourceWrapper }) => resourceWrapper.map(
      ({ frontmatter }) => {
        const { html } = frontmatter.resource_link;

        if (!frontmatter) {
          return null;
        }

        const translationsRaw = frontmatter.resource_translations_link || [];

        return {
          title: frontmatter.translated_resource_title,
          html,
          translations: translationsRaw
            .filter(doesExist)
            .reduce(
              (result, { frontmatter: innerFm, html: innerHtml }) => ({
                ...result,
                [languageToIso(innerFm.language)]: {
                  title: innerFm.resource_title,
                  html: innerHtml,
                },
              }),
              {},
            ),
        };
      },
    ),
  );

  const urls = flatten(translationObjects).reduce(
    (result, { title, translations }) => ({
      ...result,
      [title]: translations,
    }),
    {},
  );

  const englishHtml = flatten(translationObjects).reduce(
    (result, { title, html }) => ({
      ...result,
      [title]: html,
    }),
  );


  const getTitle = ({ key, englishTitle }) => {
    if (key === 'eng') {
      return {
        title: englishTitle,
        fallback: false,
        html: englishHtml[englishTitle],
      };
    }

    const { title, html } = urls[englishTitle][key] || {};

    if (title && html) {
      return {
        title,
        html,
        fallback: false,
      };
    }

    return {
      title: englishTitle,
      fallback: true,
      html: englishHtml[englishTitle],
    };
  };

  const pages = isoKeys.map((isoKey) => {
    const sources = Object.keys(urls).map((englishTitle) => {
      const {
        title: outerTitle,
        fallback: outerFallback,
        html,
      } = getTitle({ key: isoKey, englishTitle });

      return {
        component: 'src/templates/resourcePage',
        url: `${isoKey}/resources/${param(outerTitle)}/index.html`,
        context: {
          html,
          title: outerTitle,
          meta: {
            fallback: outerFallback,
            isoKey,
            languages: isoKeys
              .filter(key => key !== isoKey)
              .reduce(
                (result, key) => {
                  const { title, fallback } = getTitle({ key, englishTitle });

                  return {
                    ...result,
                    [key]: {
                      url: `${key}/resources/${param(title)}/index.html`,
                      fallback,
                    },
                  };
                },
                {},
              ),
          },
        },
      };
    });

    return sources;
  });


  return flatten(pages);
};
