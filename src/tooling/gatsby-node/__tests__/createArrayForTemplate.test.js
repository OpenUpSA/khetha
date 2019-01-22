const data = require('./createArrayForTemplate.basic.mock.json');
const result = require('./createArrayForTemplate.basic.result.json');
const createArrayForTemplates = require('../createArrayForTemplates');
const parseListOfFolders = require('../parseListOfFolders');
const parseFoldersContent = require('../parseFoldersContent');
const parseResourcesPages = require('../parseResourcesPages');


const parseListOfFoldersResult = require('../parseListOfFolders/__tests__/index.basic.result.json');
const parseFoldersContentResult = require('../parseFoldersContent/__tests__/index.basic.result.json');
const parseResourcesPagesResult = require('../parseResourcesPages/__tests__/index.basic.result.json');


jest.mock('../parseListOfFolders');
parseListOfFolders.mockImplementation(() => parseListOfFoldersResult);

jest.mock('../parseFoldersContent');
parseFoldersContent.mockImplementation(() => parseFoldersContentResult);

jest.mock('../parseResourcesPages');
parseResourcesPages.mockImplementation(() => parseResourcesPagesResult);


const isoKeys = [
  'eng',
  'afr',
  'spa',
  'xho',
];


const input = createArrayForTemplates({ data, isoKeys });
const assertion = () => expect(input).toEqual(result);


test('createArrayForTemplates: basic', assertion);
