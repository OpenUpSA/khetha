import CMS, { init } from 'netlify-cms';

import IconSelector from './widgets/IconSelector';
import IconSelectorMarkup from './widgets/IconSelector/Markup';
import createFolders from './collections/createFolders';
import languages from '../config/languages';
import createResource from './collections/createResource';
import createQuestion from './collections/createQuestion';
import createTranslation from './collections/createTranslation';
import aboutPage from './collections/aboutPage';


const isoKeys = Object.keys(languages);
const languageValues = isoKeys.map(key => languages[key]);


const config = {
  backend: {
    name: 'github',
    repo: 'OpenUpSA/pocket-reporter',
  },
  media_folder: 'static/assets',
  public_folder: 'assets',
  publish_mode: 'editorial_workflow',
  load_config_file: false,
  editor: {
    preview: false,
  },
  collections: [
    createFolders(languageValues),
    createTranslation({ type: 'question', languages: languageValues }),
    ...isoKeys.map(createQuestion),
    createTranslation({ type: 'resource', languages: languageValues }),
    ...isoKeys.map(createResource),
    {
      name: 'static',
      label: 'Static Web Pages',
      folder: 'src/data/static/',
      files: [
        aboutPage,
      ],
    },
  ],
};


CMS.registerWidget('icon-selector', IconSelector, IconSelectorMarkup);


init({ config });
