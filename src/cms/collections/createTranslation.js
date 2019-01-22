import { sentence } from 'change-case';


const calcIcon = (string) => {
  switch (string) {
    case 'resource': return '📙';
    case 'question': return '📘 ';
    default: return new Error(`${string} is not a valid parameter for 'calcIcon'`);
  }
};


export default ({ type, languages }) => ({
  name: `${type}_translations`,
  identifier_field: 'question_title',
  label: `${calcIcon(type)} ${sentence(type)} Translations`,
  folder: `src/data/${type}/`,
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'translations',
    },
    {
      name: 'schema',
      label: 'Schema',
      widget: 'hidden',
      default: type,
    },
    {
      name: `${type}_link`,
      label: '🔸 Linked English Title (fallback)',
      widget: 'string',
    },
    {
      name: `${type}_translations_link`,
      label: 'Linked Translations',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'language',
          label: 'Language',
          widget: 'select',
          options: languages,
        },
        {
          name: type,
          label: '🔸 Linked Title',
          widget: 'string',
        },
      ],
    },
  ],
});
