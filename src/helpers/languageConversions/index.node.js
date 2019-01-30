const {
  title,
  camel,
  snake,
  param,
} = require('change-case');


const cases = {
  title,
  camel,
  snake,
  param,
};


const languageToIso = (language) => {
  const formattedLanguage = title(language);

  switch (formattedLanguage) {
    case 'English': return 'eng';
    case 'Afrikaans': return 'afr';
    case 'Spanish': return 'spa';
    case 'Xhosa': return 'xho';
    case 'Northern Sotho': return 'nso';
    case 'Portuguese': return 'por';
    case 'Southern Sotho': return 'sot';
    case 'Tswana': return 'tsw';
    case 'Zulu': return 'zul';
    default: throw new Error(`"${language}" is not a valid parameter.`);
  }
};

const isoToLanguage = (iso, formatting) => {
  const format = cases[formatting] ? cases[formatting] : value => value;

  switch (iso) {
    case 'eng': return format('English');
    case 'afr': return format('Afrikaans');
    case 'spa': return format('Spanish');
    case 'xho': return format('Xhosa');
    case 'nso': return format('Northern Sotho');
    case 'por': return format('Portuguese');
    case 'sot': return format('Southern Sotho');
    case 'tsn': return format('Tswana');
    case 'zul': return format('Zulu');
    default: throw new Error(`"${iso}" is not a valid parameter.`);
  }
};

module.exports = {
  languageToIso,
  isoToLanguage,
};
