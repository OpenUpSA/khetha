import { isoToLanguage } from '../../helpers/languageConversions/index.node';


export default isoKey => ({
  name: `${isoKey}_resources`,
  identifier_field: 'question_title',
  label: `🔹 ${isoToLanguage(isoKey)}`,
  folder: `src/data/questions/${isoKey}/`,
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'question',
    },
    {
      name: 'language',
      label: 'language',
      widget: 'hidden',
      default: isoKey,
    },
    {
      name: 'question_title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'questions',
      label: 'Questions',
      widget: 'list',
      fields: [
        {
          name: 'question',
          label: 'Question',
          widget: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'markdown',
          required: false,
        },
        {
          name: 'formatOfAnswer',
          label: 'Format of answer',
          widget: 'select',
          default: '',
          options: [
            'Single line of text',
            'Multiple lines of text',
            'True or False',
            'One from pre-selected options',
            'Several from pre-selected options',
          ],
        },
        {
          name: 'options',
          label: 'Options',
          widget: 'list',
          required: false,
          fields: [
            {
              name: 'default',
              label: 'Default',
              widget: 'boolean',
            },
            {
              name: 'option',
              label: 'Option',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
});
