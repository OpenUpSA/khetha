const tasksSchema = () => [
  {
    name: 'title',
    label: 'Title',
    widget: 'string',
  },
  {
    name: 'description',
    label: 'Description',
    widget: 'markdown',
  },
  {
    name: 'icon',
    label: 'Icon',
    widget: 'icon-selector',
  },
  {
    name: 'points',
    label: 'Points',
    widget: 'number',
  },
  {
    name: 'single_question',
    label: 'Questions',
    widget: 'list',
    fields: [
      {
        name: 'single_question',
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
        name: 'format',
        label: 'Format',
        widget: 'select',
        options: [
          'Single line text',
          'Paragraph',
          'Buttons',
          'Dropdown',
          'Checkboxes',
          'Date',
          'GPS Location',
        ],
      },
      {
        name: 'options',
        label: 'Option',
        widget: 'list',
        required: false,
        field: { name: 'single-option', widget: 'string' },
        default: [],
      },
    ],
  },
];

const tasks = () => ({
  name: 'tasks',
  label: '✅ Tasks',
  folder: 'src/data/tasks/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'tasks',
    },
    ...tasksSchema(),
  ],
});

export default tasks;
