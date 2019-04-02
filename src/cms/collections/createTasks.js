const tasksRecord = () => [
  {
    name: 'points',
    label: 'Points',
    widget: 'number',
  },
  {
    name: 'icon',
    label: 'Icon',
    widget: 'icon-selector',
  },
  {
    name: 'question',
    label: 'Question',
    widget: 'string',
  },
  {
    name: 'description',
    label: 'Description',
    widget: 'markdown',
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
      },
      {
        name: 'format',
        label: 'Format',
        widget: 'select',
        options: [
          'string',
          'text',
          'buttons',
          'select',
          'checkboxes',
          'date',
          'gps',
        ],
      },
      {
        name: 'option',
        label: 'Option',
        widget: 'list',
        default: [],
      },
    ],
  },
];

const createTasks = () => ({
  name: 'tasks',
  label: '✅ Tasks',
  folder: 'src/data/tasks-test/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'tasks',
    },
    ...tasksRecord(),
  ],
});

export default createTasks;
