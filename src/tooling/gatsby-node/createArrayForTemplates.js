const getFolderTranslations = require('./getFolderTranslations');
const parseFoldersContent = require('./parseFoldersContent');
const parseListOfFolders = require('./parseListOfFolders');
const parseResourcesPages = require('./parseResourcesPages');


const parseRootFolders = ({ allMarkdownRemark }) => {
  const { edges } = allMarkdownRemark;
  return edges.map(({ frontmatter }) => frontmatter);
};


module.exports = ({ data, isoKeys }) => {
  const folders = parseRootFolders(data);

  const listOfFolders = parseListOfFolders({
    folders,
    isoKeys,
    parseWith: getFolderTranslations,
  });

  const foldersContent = parseFoldersContent({
    folders,
    isoKeys,
    parseWith: getFolderTranslations,
  });

  const resourcePages = parseResourcesPages({
    folders,
    isoKeys,
  });

  return [
    ...listOfFolders,
    ...foldersContent,
    ...resourcePages,
  ];
};
