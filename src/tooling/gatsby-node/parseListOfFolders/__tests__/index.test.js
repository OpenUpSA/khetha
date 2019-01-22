const { omit } = require('lodash');
const parseListOfFolders = require('../index.js');
const folders = require('./index.basic.mock.json');
const basicResult = require('./index.basic.result.json');


const mockFunction = jest.fn();


const isoKeys = [
  'eng',
  'afr',
  'spa',
  'xho',
];


mockFunction
  .mockReturnValueOnce([
    {
      fallback: false,
      isoKey: 'eng',
      title: 'Example 1',
      url: '/eng/folders/example-1/index.html',
    },
    {
      fallback: false,
      isoKey: 'afr',
      title: 'Voorbeeld 1',
      url: '/afr/folders/voorbeeld-1/index.html',
    },
    {
      fallback: true,
      isoKey: 'spa',
      title: 'Example 1',
      url: '/spa/folders/example-1/index.html',
    },
    {
      fallback: true,
      isoKey: 'xho',
      title: 'Example 1',
      url: '/xho/folders/example-1/index.html',
    },
  ])
  .mockReturnValueOnce([
    {
      fallback: false,
      isoKey: 'eng',
      title: 'Example 2',
      url: '/eng/folders/example-2/index.html',
    },
    {
      fallback: false,
      isoKey: 'afr',
      title: 'Voorbeeld 2',
      url: '/afr/folders/voorbeeld-2/index.html',
    },
    {
      fallback: true,
      isoKey: 'spa',
      title: 'Example 2',
      url: '/spa/folders/example-2/index.html',
    },
    {
      fallback: true,
      isoKey: 'xho',
      title: 'Example 2',
      url: '/xho/folders/example-2/index.html',
    },
  ]);


const extractTemplates = (array) => {
  const result = array.map(folder => omit(folder, ['component']));
  return result;
};


const input = expect(extractTemplates(parseListOfFolders({
  folders,
  isoKeys,
  parseWith: () => mockFunction,
})));


const assertion = () => (input).toEqual(basicResult);


test('parseFolders: basic', assertion);
