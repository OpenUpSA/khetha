const tasksRecord = () => [
  {
    name: 'title',
    label: 'Title',
    widget: 'string',
    hint: 'The name of the task as displayed to users in the webapp.',
  },
  {
    name: 'description',
    label: 'Description',
    widget: 'markdown',
    hint: 'A short 2-3 sentence description of the task. This description is usually presented to users when deciding on their next task in order to help them determine a selection.',
  },
  {
    name: 'icon',
    label: 'Icon',
    widget: 'icon-selector',
    hint: 'The icon that will be displayed to users as part of the task preview.',
  },
  {
    name: 'points',
    label: 'Points',
    widget: 'number',
    hint: 'How many points a user gets assigned once this task is submitted.',
  },
  {
    name: 'Question Information',
    label: 'Questions',
    widget: 'list',
    fields: [
      {
        name: 'Question Information',
        label: 'Question',
        widget: 'string',
        hint: 'A single question inside a task. This should ideally summarise the core question users need to answer. It is recommended that this be a short sentence/phrase, while the a matching description {@link questionDescription} should be used for more detailed explainations, context or examples answers.',
      },
      {
        name: 'description',
        label: 'Description',
        widget: 'markdown',
        required: false,
        hint: 'An optional description that will be matched to the above question. This description should be used to provide additional details, context or examples answers to the question if needed.',
      },
      {
        name: 'format',
        label: 'Widget',
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
        hint: "A single widget (from a pre-determined list) that users will be presented with as a mechanism to respond to a single matching question in a tasks. This ranges from a single selection between buttons to using your device/'s built in geolocation.",
      },
      {
        name: 'options',
        label: 'Option',
        widget: 'list',
        required: false,
        hint: "A list of pre-determined answers that a user can select from in order to answer the above questions. NOTE: Only required if widget is 'Buttons','Dropdown' or 'Checkboxes'. NOTE: Options should be seperated by a comma (',').",
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
