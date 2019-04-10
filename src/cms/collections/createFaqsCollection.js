const faqsRecord = () => [
  {
    name: 'question',
    label: 'Question',
    widget: 'text',
  },
  {
    name: 'answer',
    label: 'Answer',
    widget: 'markdown',
  },
];

const createFaqsCollection = () => ({
  name: 'faqs',
  identifier_field: 'question',
  label: '❓ FAQs',
  label_singular: 'Question',
  folder: 'src/data/faqs-test/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'faqs',
    },
    ...faqsRecord(),
  ],
});

export default createFaqsCollection;
