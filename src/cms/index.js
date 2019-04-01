/* eslint-disable import/no-extraneous-dependencies */


import CMS, { init } from 'netlify-cms';
import IconSelector from './widgets/IconSelector';
import IconSelectorMarkup from './widgets/IconSelector/Markup';
import createFolders from './collections/createFolders';
import createQuestions from './collections/createQuestions';
import createResources from './collections/createResources';
import aboutPage from './collections/aboutPage';
import languages from '../config/languages';


const isoKeys = Object.keys(languages);
// const languageValues = isoKeys.map(key => languages[key]);


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
    createFolders(isoKeys),
    createQuestions(isoKeys),
    createResources(isoKeys),
    {
      name: 'static-content',
      label: '📌 Static Web Pages',
      folder: 'src/data/static-content/about/',
      files: [
        aboutPage,
      ],
    },
  ],
};


CMS.registerWidget('icon-selector', IconSelector, IconSelectorMarkup);


init({ config });
