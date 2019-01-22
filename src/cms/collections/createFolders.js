export default languages => ({
  name: 'folders',
  label: '📚 Folders',
  folder: 'src/data/folders/',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'folder',
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'icon-selector',
    },
    {
      name: 'title',
      label: 'Folder Title',
      widget: 'string',
    },
    {
      name: 'translated-title',
      label: 'Folder Title Translations',
      widget: 'list',
      fields: [
        {
          name: 'language',
          label: 'language',
          widget: 'select',
          options: languages,
        },
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
      ],
    },
    {
      name: 'translated_question_link',
      label: '📘 Questions Translations',
      widget: 'list',
      field: {
        name: 'title',
        label: 'Title',
        widget: 'string',
      },
    },
    {
      name: 'translated_resource_link',
      label: '📙 Questions Translations',
      widget: 'list',
      field: {
        name: 'title',
        label: 'Title',
        widget: 'string',
      },
    },
  ],
});
