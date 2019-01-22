const getFolderTranslations = require('../index.js');
const output = require('./index.result.basic.json');


const translations = [
  {
    language: 'Afrikaans',
    translation: 'Voorbeeld 1',
  },
];


const isoKeys = [
  'eng',
  'afr',
  'spa',
  'xho',
];


const input = getFolderTranslations({ isoKeys })({ translations, title: 'Example 1' });
const assertion = () => expect(input).toEqual(output);


test('getFolderTranslations: basic', assertion);
