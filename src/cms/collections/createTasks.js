const tasksRecord = (required = true) => [
  {
    name: 'id',
    label: 'ID',
    widget: 'string',
    required,
  },
  {
    name: 'points',
    label: 'Points',
    widget: 'number',
    required,
  },
  {
    name: 'icon',
    label: 'Icon',
    widget: 'string',
    required,
  },
  {
    name: 'title',
    label: 'Title',
    widget: 'string',
    required,
  },
  {
    name: 'description',
    label: 'Description',
    widget: 'string',
    required,
  },
  {
    name: 'questions',
    label: 'Questions',
    widget: 'list',
    fields: [
      {
        name: 'title',
        label: 'Title',
        widget: 'string',
        required,
      },
      {
        name: 'description',
        label: 'Description',
        widget: 'string',
        required: false,
      },
      {
        name: 'format',
        label: 'Format',
        widget: 'string',
        required,
      },
      {
        name: 'option',
        label: 'Option',
        widget: 'string',
        required: false,
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
    ...tasksRecord(true),
  ],
});

export default createTasks;
