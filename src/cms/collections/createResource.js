import { isoToLanguage } from '../../helpers/languageConversions/index.node';


export default isoKey => ({
  name: `${isoKey}_resource`,
  identifier_field: 'resource_title',
  label: `🔸 ${isoToLanguage(isoKey)}`,
  folder: `src/data/resources/${isoKey}/`,
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'resources',
    },
    {
      name: 'language',
      label: 'Language',
      widget: 'hidden',
      default: isoKey,
    },
    {
      name: 'resource_title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'body',
      label: 'Content',
      widget: 'markdown',
    },
  ],
});
