export default {
  name: 'about',
  label: 'About Page',
  file: 'src/data/static/about',
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'static',
    },
    {
      name: 'page',
      label: 'Page',
      widget: 'hidden',
      default: 'about',
    },
    {
      name: 'tagline',
      label: 'Tagline',
      widget: 'string',
    },
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
      name: 'body',
      label: 'Content',
      widget: 'markdown',
    },
  ],
};
