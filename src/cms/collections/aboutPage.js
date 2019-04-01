export default {
  name: 'about',
  label: 'About Page',
  extension: 'json',
  file: 'src/data/static-content/about/index.json',
  fields: [
    {
      name: 'tagline',
      label: 'Tagline',
      widget: 'string',
    },
    {
      name: 'partners',
      label: 'Partners',
      widget: 'list',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string',
        },
        {
          name: 'link',
          label: 'Web Link',
          widget: 'string',
          required: false,
        },
        {
          name: 'logo',
          label: 'logo',
          widget: 'image',
        },
      ],
    },
    {
      name: 'contributors',
      label: 'Individual Contributors',
      widget: 'list',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string',
        },
        {
          name: 'link',
          label: 'Web Link',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown',
    },
  ],
};
