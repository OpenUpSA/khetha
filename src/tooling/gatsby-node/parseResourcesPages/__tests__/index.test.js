const { omit } = require('lodash');
const parseResourcesPages = require('../index');
const folders = require('./index.basic.mock.json');
const result = require('./index.basic.result.json');


const isoKeys = [
  'eng',
  'afr',
  'spa',
  'xho',
];


const extractTemplates = array => array.map(folder => omit(folder, ['component']));


const input = extractTemplates(parseResourcesPages({ folders, isoKeys }));
const assertion = () => expect(input).toEqual(result);


test('parseFolders: basic', assertion);
