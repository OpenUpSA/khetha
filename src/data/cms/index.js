/* eslint-disable import/no-extraneous-dependencies */

import CMS, { init } from 'netlify-cms';
import IconSelector, { Markup as IconSelectorMarkup } from './widgets/IconSelector';
import tasks from './collections/tasks';
import rewards from './collections/rewards';
import faqs from './collections/faqs';

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
    tasks(),
    rewards(),
    faqs(),
  ],
};

CMS.registerWidget('icon-selector', IconSelector, IconSelectorMarkup);

init({ config });
