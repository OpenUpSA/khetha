/* eslint-disable import/no-extraneous-dependencies */

import CMS, { init } from 'netlify-cms';
import IconSelector from './widgets/IconSelector';
import IconSelectorMarkup from './widgets/IconSelector/Markup';
import createTasksCollection from './collections/createTasksCollection';
import createRewardsCollection from './collections/createRewardsCollection';
import createFaqsCollection from './collections/createFaqsCollection';

const config = {
  backend: {
    name: 'github',
    repo: 'OpenUpSA/khetha',
  },
  media_folder: 'static/assets',
  public_folder: 'assets',
  publish_mode: 'editorial_workflow',
  load_config_file: false,
  editor: {
    preview: false,
  },
  collections: [
    createTasksCollection(),
    createFaqsCollection(),
    createRewardsCollection(),
  ],
};

CMS.registerWidget('icon-selector', IconSelector, IconSelectorMarkup);

console.log('config', config);
init({ config });
