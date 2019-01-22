---
name: File Structure
menu: Overview
---

# 🔨 File Structure

This project, first and foremost, follows the general react priciple of [grouping by features and routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes), however with a couple of minor adjustments:

## Root folders

There are 6 root folders in the `src` folder. These are as follows:

- [Pages](#pages)
- [Templates](#templates)
- [Views](#views)
- [Components](#components)
- [Assets](#assets)
- [Helpers](#he)

### Pages

Gatsby uses the `src/pages` folder to build hardcoded routes. You use this folder to create both low-level routes and nested routes. For example you might have:

```powershell
├── index.js
├── about.js
└── user
    ├── index.js
    ├── profile.js
    └── settings.js
```

Which would translate into the following:
- /: `index.js`
- /about: `about.js`
- /user: `user/index.js`
- /user/profile: `user/profile.js`

As a rule of thumb these files should only initialise components and pass either hardcoded values or values obtained from GraphQL nodes to components in `src/views`.

Abstain from putting any UI specific code or logic in these files. 

For example:

```js
import React from 'react';
import { graphql } from 'gatsby';
import Homepage from '../views/Homepage';

const View = ({ data }) => {
  const { description } = data.site.siteMetadata;
  return <Homepage {...{ description }} />
}

const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export { query };
export default View;
```

You can learn more in the ['Pages' section in the Gatsby documenation](https://www.gatsbyjs.org/docs/recipes/#creating-pages)

### Templates

Similar to `src/pages` this folder is exclusively used to initialise components from `src/views`.

The difference between `src/pages` and `src/templates` is that templates are not created by their mere existence in the `src/templates` folder. They need to be triggered through the `gatsby-node.js` file. 

Learn more in the ['Node API' section in the Gatsby documentation](https://www.gatsbyjs.org/docs/node-apis/) ('node' refers to GraphQL nodes and should not be confused with NodeJS).

All files inside `src/templates` have access to the GraphQL nodes during Gatsby's static file generation. This means that `src/templates` is useful for pages that are generated dynamically based on local `.md`, `.json` or remote API data.

Learn how to create dynamic pages in gatsby in the ['Programmatically create pages from data' section in the Gatsby documenation](https://www.gatsbyjs.org/tutorial/part-seven/).

Since these pages are not created by there mere existence in the `src/templates` folder it is helpful to embed both the required `gatsby-node.js` functions and template code in a folder.

This adheres to the rules of colocation and keeps the `gatsby-node.js` file from getting too messy.

For example:

```powershell
├── events
│   ├── onCreateNode.js
│   ├── createPages.js
│   └── index.js
└── products
    ├── onCreateNode.js
    ├── createPages.js
    └── index.js
```

```js
// src/templates/products/onCreateNode.js

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

```js
// src/templates/products/createPages.js

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const callTemplate = (result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/product/index.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
  }

  const query = `
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `;

  return graphql(query).then(callTemplate)
}

```

```js
// gatsby-node.js

import productNodes from './src/templates/products/onCreateNode';
import productPages from './src/templates/products/createPages';

import eventNodes from './src/templates/events/onCreateNode';
import eventPages from './src/templates/events/createPages';


export.onCreateNode = (...params) => {
  productNodes(params);
  eventNodes(params);
}

exports.createPages = (...params) => {
  productPages(params);
  eventPage(params);
}
```

### Components

This folder will be where React components that are re-used by multiple `src/views` or multipe other `src/components` files are housed.

For example if we have a `<Button>` component that is used in several places:

- `src/views/About/index.jsx`
- `src/views/User/tag.jsx`
- `src/components/ButtonGroup.jsx`

However, note that if this component is plugged into Redux by default it is a good idea to separate the actual component class from the integration.

For example:

```powershell
├── List.jsx
├── Alert.jsx
└── Button
    ├── index.js
    └── Markup.jsx
```

```js
// src/components/Button/index.js

import { connect } from 'react-redux';
import { reverseName } from '../redux/modules/users.js';
import Button from './Component';

const mapStateToProps = (state, ownProps) => {
  name: state.user.name,
  ...ownProps,
}

const mapDispatchToProps = (state, ownProps) => {
  reverseName: dispatch => reverseName,
  ...ownProps,
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
```

```js
// src/components/Button/Button.jsx

import React from 'react';

const Button = ({ name }) => (
  <button>
    {name}
  </button>
);

export default Button;
```

This means that we are able to pass our placeholder props straight to `Button.jsx` during testing (avoiding Redux completely).

Furthermore, if we want another component-specific container around the component we can do the following:

```powershell
├── List.jsx
├── Alert.jsx
└── Button
    ├── index.js
    ├── Container.jsx
    └── Markup.jsx
```

Where `Container.jsx` would be as follows:

```js
import React, { Component } from 'react';
import Markup from './Markup';


class Container extends Component {
  state = {
    clicked: false,
  }

  toggleClicked = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const { toggleClicked } = this;
    const { name } = this.props;
    const { clicked } = this.props;
    return <Markup {...{ name, clicked, toggleClicked }} />
  }
}
```
As per the principle of [grouping by features and routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes), numerous other files can be added into the component folder:

```powershell
├── List.js
├── Alert.js
└── Button
    ├── index.js
    ├── index.mdx
    ├── config.js
    ├── Container.jsx
    ├── Markup.jsx
    ├── Markup.test.js
    ├── Markup.mocks.json
    ├── Tooltip.jsx
    ├── icon.svg
    └── stringToUppercase.js
```

These could hypothetically be as follows:
- `index.js`: The file that initialises the component, the Redux container that wraps the component.
- `index.mdx`: A [.mdx file](https://mdxjs.com/) used by [Docz](https://docz.site) to generate documentation for the component.
- `config.json`: Hardcoded constants can be stored as values in here for hardcoded values in the component.
- `Container.jsx`: Might house the container component we created above.
- `Markup.jsx`: Stateless component that is easily testable via snapshots based on props passed.
- `Markup.test.js`: Might be the actual test that runs on `Markup.jsx` during unit testing.
- `Markup.mocks.json`: Might contain the mock props that are passed to `Markup.test.js` during testing.
- `Tooltip.jsx`: Might be another component that gets pulled into `Markup.jsx`.
- `icon.svg` might be an image that is used as an icon in the button in `Markup.jsx`.
- `stringToUppercase.js` might be a helper function that is used in any of the above files.

However, this means that folders might get a bit cluttered for complex views and/or components. Therefore these themselves can be nested into sub-folders. For example:

```powershell
├── List.js
├── Alert.js
└── Button
    ├── index.js
    ├── index.mdx
    ├── config.js
    ├── Container
    │   ├── index.jsx
    │   └── stringToUppercase.js
    ├── Markup
    │   ├── index.jsx
    │   ├── .test.js
    │   └── mocks.json
    ├── Tooltip
    │   ├── index.jsx
    │   ├── Markup.jsx
    │   ├── Markup.test.js
    │   └── Markup.mocks.json
    └── getIcon
        ├── index.js
        ├── icon-1.svg
        ├── icon-2.svg
        └── icon-3.svg

```

Not only does this remove some of the noise in the component folder, it also better clarifies what components are dependant on what other components, helpers scripts or assets.

For really complex components this can be taken another level deeper:


```powershell
├── List.js
├── Alert.js
└── Button
    ├── index.js
    ├── index.mdx
    ├── config.js
    ├── Tooltip
    │   ├── index.jsx
    │   ├── Markup
    │   │   ├── index.js
    │   │   └── .test.js
    │   └── Spinner
    │       ├── index.js
    │       └── .test.js
    └── ...
```

However, as [indicated in the React documentation](https://reactjs.org/docs/faq-structure.html#avoid-too-much-nesting) be conservative in nested structures and only add further nesting if it aids the readability of the component.

### Views

Similar to `src/components`, `src/views` will be where the majority of our components live (unless we heavily rely on re-usable components). 

...

### Assets

Generally all assets should be embedded in a per components basis. For example:

```powershell
└── Example
    ├── index.jsx
    ├── image-1.jpg
    ├── image-2.jpg
    └── image-3.jpg
```

If the number of assets get a bit overwhelming they can be broken off into a helper script with it's own folder. For example: 

```powershell
└── Example
    ├── index.jsx
    └── getImage
        ├── index.js
        ├── image-1.jpg
        ├── image-2.jpg
        ├── image-3.jpg
        ├── image-4.jpg
        ├── image-5.jpg
        └── ...
```

This prevents the component folder from becoming too noisy.

However, in cases where an asset is re-used in several components it should be placed in the root `src/assets` folder.


### Redux

...

### Services

...
