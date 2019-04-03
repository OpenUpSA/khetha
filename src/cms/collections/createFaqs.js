const faqsRecord = () => [
  {
    name: "question",
    label: "Question",
    widget: "text"
  },
  {
    name: "answer",
    label: "Answer",
    widget: "markdown"
  }
];

const createFaqs = () => ({
  name: "faqs",
  identifier_field: "question",
  label: "FAQ",
  label_singular: "Question",
  folder: "src/data/faqs/",
  extension: "json",
  create: true,
  fields: [
    {
      name: "type",
      label: "Type",
      widget: "hidden",
      default: "faqs"
    },
    ...faqsRecord()
  ]
});

export default createFaqs;
