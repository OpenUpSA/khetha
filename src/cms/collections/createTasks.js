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
        widget: 'string',
      },
      {
        name: 'format',
        label: 'Format',
        widget: 'string',
      },
      {
        name: 'option',
        label: 'Option',
        widget: 'string',
      },
    ],
  },
];

const createTasks = () => ({
  name: 'tasks',
  label: '📚 Tasks',
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
    ...tasksRecord(),
  ],
});

export default createTasks;
