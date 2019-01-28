---
name: File Structure
menu: Project Overview

---

# 🔨 Folder and File Structure

**All guidelines below are in the interest of contributor readibility and clarity (rather erring on the side of verbosity and/or over-orchestartion instead of confusion and/or frustration)**

Conventions used in this project are divided into the following broad categories:

- [General Principles](#general-principles)
- [Folder Structure](#folder-structure)
- [File Structure](#file-structure)


## General Principles

This project, first and foremost, follows the general principle of [grouping by features and routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes) and the standard established in the [Gatsby project structure](https://www.gatsbyjs.org/docs/gatsby-project-structure/). However, there a couple of project-specific house-rules that are driven by following high-level principles:

- [Semantic](#semantic-organisation)
- [Encapsulated](#encapsulation)
- [Explicit](#composable)

### Semantic

Files and folders should be loosely structed into semantically related units (all the way from the root `src/` folder down to individual files). The functionality, presentation, documentation, assets and associated tests should (as far as possible) be semanticly organised based on [the principle of proximity](https://en.wikipedia.org/wiki/The_Proximity_Principle):

This means that the following approaches should be avoided:

- Based on Tooling (`.../sass/styling.scss`)
- Based on Source (`.../libs/jQuery.js`) 
- Based on Inheritance (`../Button/style.css` and `../christmas-theme/Button/style.css`)

Rather files should be organised as closely as possible to the manner in which they semantically present themselves to the user (or in other words: how they influence a specific part of the UI). For example (listed in order of the scale of this influence) `button/`, `page-footer`, `about-page/` or `signed-in-state/`. This idea is further expanded in the documentation on the ['views' root folder](#views).

### Encapsulated

Semantic-grouped units should not directly modify the presentation or behaviour of their dependencies, but should rather relying on interfaces and events for inter-component communication.

For example the following should be considered a [code smell](https://en.wikipedia.org/wiki/Code_smell):

```
// src/tooling/cms-config/widgets/FancyButton/Tooltip/Popup.jsx

import icon from '../../../../../views/LandingPage/Markup/images/email/icon-fallback.png';

export default ({ message }) => (
  <div>
    <img src={icon} title="Send me!" />
    <h3>{messsage}</h3>
  </div>
);
```

A better approch would be first to make the above modular (via the `src/components` folder) and then only to interface with respective semantic units it as follows:

```
// src/tooling/cms-config/widgets/FancyButton/Tooltip/Popup.jsx

import icon from '../../../../../components/Icon';

export default ({ message }) => (
  <div>
    <Icon type="email" fallback title="Send me!" />
    <h3>{messsage}</h3>
  </div>
);
```

Granular coupling between elements is often times a major headache in contributor-driven front-end systems (pejoratively refered to as [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code)). The more one reduces the entanglement of semantic units, the easier it is to reason and understand the higher-level system.


### Explicit

Encapsulated-semantic units also tend to be be considerably easier to document since they are expected to be used in ways that are scoped to their semantic meaning (for example `Icon`) and, through an encapsulated API, according to a pre-determined range of configurations (for example `<Icon type="mail" size="large" />`).

Furthermore, documentation should be structured in such a way that it can become increasingly granular (through iteration) in scope starting from the most basic semantic-unit level. The ideal of self-documentating code often seems to be the exception rather than the rule (at least in the world of front-end). Do not assume contributors are able to infer the significance/meaning behind certain file/folder arrangments unless proven as such.

## Folder Structure

The project is broken into encapsulated semantic units starting from the each root folder in the `src/` folder as the biggest possible unit.

Everything outside of the `src/` folder can be considered configuration files (these include files like `jest.config.js`, `package.json` and `.eslintrc`) and should not be considered as part of the above organisational pattern. It can be assumed that all files outside of `src/` is not used in the code itself but rather as configuration used by a specific NPM script (for example `npm run build`) or third-party integration (for example `.travisrc`)

**Root Folders**

There are 12 root folders in the `src` folder. These are as follows:

- **1\. Config**
- **2\. Pages**
- **3\. Templates**


<!-- - **1 Config**
- **2 Pages**
- **3 Templates**

- **4 Components**
- **1 Assets**
- **6 Templates**
- **7 Data**
- **8 Docs**
- **9 Helpers**
- **10 Pages**
- **11 Redux**
- **12 Templates**
- **13 Tooling**
- **14 Views** -->

See the outline below for each folder's specific purpose:

### 1. Config

**The `src/config/` folder is reserved for storing [constant values](https://en.wikipedia.org/wiki/Constant_(computer_programming)) that are used project-wide.**

These usually has a severe/wide-ranging impact on the project, so should only be changed or removed if you know exactly what the effect will be or if you are doing a project-wide refactor.

Examples of values that might go in `src/config`:
- A list of all languages-specific variations of the project (for example `languages.json`)
- Project wide functionality that can be turned on or off (for example `.DEBUG_MODE`)
- Project wide information that changes on an infrequent basis (for example `copyright.md`)

_Note: Be careful to not store values in here that might never change since this creates unneeded abstractions/complexity in your code. Rather hard-code unchanging values as needed in the context where they are used._

### Pages

**Gatsby uses the `src/pages` folder to build hard-coded routes.**

 You can use this folder to create both root-level or nested routes. For example you might have:

```powershell
├── index.js
├── about.js
└── user
    ├── index.js
    ├── profile.js
    └── settings.js
```

Which would translate into the following:
- www.site.org/: `index.js`
- www.site.org/about: `about.js`
- www.site.org/user: `user/index.js`
- www.site.org/user/profile: `user/profile.js`

As a rule of thumb these files should only be used to initialise view components (found in `src/views`) and should not contain any state or UI-specific logic. In order to adhere to the [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react) principle of [naming](https://github.com/airbnb/javascript/tree/master/react#naming) specifically using Pascal-casing for JSX components (since we don't want our path to be `/user/Profile/`) - these files should have the `.js` extension and therefore refrain from using [JSX](https://reactjs.org/docs/introducing-jsx.html). 

For example:
```js
// src/pages/index.js

import { createElement } from 'react';
import LandingPage from '../views/LandingPage';

export default () => createElement(LandingPage);
```

To learn more about using `createElement` without JSX consult the [React API documentation on createElement](https://reactjs.org/docs/react-api.html#createelement).

Only two types of values are allowed to pass from `src/pages/` to `src/views` as props:

- Hardcoded values
- GraphQL data

**Hardcoded values**

You might have two routes that use the same view, but has minor changes. For example:

```js
// src/pages/index.js

import { createElement } from 'react';
import LandingPage from '../views/LandingPage';

export default () => createElement(LandingPage, { color: 'grey' }));
```

```js
// src/pages/vip/index.js

import { createElement } from 'react';
import LandingPage from '../views/LandingPage';

export default () => createElement(LandingPage, { color: 'gold' }));
```

**GraphQL data**

In order to keep view components (`src/view`) predictable and testable, GraphQL queries should be kept in `src/pages/` files and passed to `src/views` as props.

For example:

```js
// src/pages/index.js

import { createElement } from 'react';
import { graphql } from 'gatsby';
import LandingPage from '../views/LandingPage';

export default ({ data }) => {
  const { description } = data.site.siteMetadata;
  return createElement(LandingPage, { description });
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;
```

You can learn more about `src/pages` in the ['Pages' section in the Gatsby documenation](https://www.gatsbyjs.org/docs/recipes/#creating-pages)

### Templates

**Gatsby uses the `src/templates` folder to dynamically create pages from data.**

`src/templates` share a lot of similarities with `src/pages`. Similar to `src/pages` this folder is exclusively used to initialise components from `src/views`. The primary difference between `src/pages` and `src/templates` is that templates are not created by their mere existence in the `src/templates` folder. They need to be triggered through the `gatsby-node.js` file. You can learn more about `gatsby-node.js` in ['Node API' section in the Gatsby documentation](https://www.gatsbyjs.org/docs/node-apis/).

_Note: 'node' in the above context refers to GraphQL nodes and should not be confused with NodeJS_

All files inside `src/templates` have access to all Gatsby GraphQL nodes (via GraphQL queries) and values passed to the `content` property used by the `createPage()` in `gatsby-node.js`. In short the purpose of `src/templates` is to tie values passed into `createPage()` to an actual view. 

The most common use case is to use data from local [Markdown](https://en.wikipedia.org/wiki/Markdown), [YAML](https://en.wikipedia.org/wiki/YAML) or [JSON](https://en.wikipedia.org/wiki/JSON) files to create pages, however it is also possible to create pages from remote sources via [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Learn how to dynamically create pages via Gatsby in the ['Programmatically create pages from data' section in the Gatsby documenation](https://www.gatsbyjs.org/tutorial/part-seven/).

_Note: since the folder structure in `src/templates` have no bearing on the actual output templates can be organised in folders if the root folder starts getting a bit noisy. For example:_


```powershell
templates
    ├── users
    │   ├── favourites.js
    │   ├── purchased.js
    │   └── reviews.js
    └── products
        ├── list.js
        ├── product.js
        └── details.js
```


### Views

**Views are React components that output actual markup and styling (in short what the user sees)**

`src/views` was briefly mentioned above in both `src/pages` and `src/templates` as the vehicles that output the actual interface that users see in their browser. In other words, each view components usually correspond to what is considered a single type of page in a website. For example a single view component might be either one of these:

- A reusable page that showcases details about a specific product on an e-commerce store.
- A page that shows a list of all registered users on a site.
- A completely static/unchanging page like the 'contact us' section
- Or even the homepage itself.

This will be where the majority of your JSX components will live (unless they are re-used by more than one views - they can be moved to `src/components`)

**View Container Components**

It is generally good practice to seperate your components that output markup from your components that manage UI state. To learn more you can have a look at the [container component pattern](https://reactpatterns.com/#container-component) and it's counterpart the [function component](https://reactpatterns.com/#function-component) on [reactpatterns.com](https://reactpatterns.com).

If your view component does not have state it can just be created as function component (also called stateless component or functional component). For example:

```jsx
// src/views/LandingPage.jsx

import React from 'react';

export default ({ mood = 'neutral', name = 'user' }) => (
  <div>
    <h1>Welcome to my site {name}!</h1>
    <hr />
    <p>You are {mood}!</p>
  </div>
);
```

The simplicity of the above view means that it can be housed entirely in a single file, so we might have the following:

```powershell
views
    ├── LandingPage.jsx
    ├── About.jsx
    └── Contact.jsx
```

However, let us say that a user's `mood` property is controlled from this view itself and not form an remote API or Redux. The pattern above would require us to create a second component to manage the UI state, and furthermore in accordance with the [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react) we can only have one component per file.

This means that we will transform the functional component into a `Markup.jsx` file and arrange it in a folder as follows (while we will add the state via `index.jsx`):

```powershell
views
    ├── Contact.jsx
    ├── About.jsx
    └── LandingPage
        ├── index.jsx
        └── Markup.jsx
```

```js
// src/views/LandingPage/index.jsx

import React, { Component } from 'react';
import Markup from './Markup';

export default class LandingPage extends Component {
  state = {
    mood: 'neutral'
  }

  changeMood = (mood) => this.setState({ mood })

  render() {
    const { changeEvent } = this.events;
    const { mood } = this.state;
    const props = { changeEvent, mood };

    return <Markup {...props} />;
  }
}
```

Due to the way that `import` resolves paths `src/views/LandingPage` resolves both `src/views/LandingPage.jsx` and `src/views/LandingPage/index.jsx`. This means that the above change will leave any imports of the `LandingPage` unaffected.

_Note that we probably need to attach `changeEvent` to an event listener inside `Markup.jsx`, however the example above is merely to show how to separete stateful and functional components_.

**Usage with Redux**

Let's take the above a bit further and say that in addition to keeping the state in View you want to pull in additional from Redux. This means that we can extends the above as follows:

```powershell
views
    ├── Contact.jsx
    ├── About.jsx
    └── LandingPage
        ├── index.jsx
        ├── Container.jsx
        └── Markup.jsx
```

```js
// src/views/LandingPage/index.js

import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  name: state.user.name,
  ...ownProps,
}

export default connect(mapStateToProps)(Container);
```

As with the above, everything else remains unchanged with the exception that `name` is now getting passed to `Container.jsx` from Redux.

Not only is does the above arrangement make make for easier development. It also makes it easy at a glance to get a feel for a view before you even open a single file. However, the biggest wins is that we are now able to pass our placeholder props straight to `Markup.jsx` when doing Jest snapshot testing or regressive UI testing.

**Beyond Redux and Containers**

As per the principle of [grouping by features and routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes), various other files can be added into the component folder as needed. For example:

```powershell
views
    ├── Contact.jsx
    ├── About.jsx
    └── LandingPage.jsx
        ├── index.js
        ├── Container.jsx
        ├── Markup.jsx
        ├── config.js
        ├── Tooltip.jsx
        ├── icon.svg
        ├── icon-fallback.png
        ├── banner.jpeg
        ├── stringToUppercase.js
        └── README.mdx
```

These above could hypothetically the following:

- `index.js`: The file that initialises the Redux mapping that wraps the component.
- `Container.jsx`: A component that house the internal state of this specific view.
- `Markup.jsx`: A stateless component can easily be tested via Jest snapshot unit testing.
- `config.json`: Hardcoded constants can be stored as values in here to be used anywhere in the view.
- `Tooltip.jsx`: Might be another component that gets pulled into `Markup.jsx`.
- `icon.svg` might be an image that is used as an icon in the button in `Markup.jsx`.
- `stringToUppercase.js` might be a helper function that is used in any of the above files.
- `README.mdx` the view is getting pretty big now, so it might be a good idea to add documentation.

In addition every view can have it's own `__tests__` sub-folder (the default folder name for Jest unit tests) that houses all associated tests and test-related data for a specific view. For example:

```powershell
views
    ├── Contact.jsx
    ├── About.jsx
    └── LandingPage.jsx
        ├── index.js
        ├── Container.jsx
        ├── Markup.jsx
        ├── config.js
        ├── Tooltip.jsx
        ├── icon.svg
        ├── icon-fallback.png
        ├── banner.jpeg
        ├── stringToUppercase.js
        ├── README.mdx
        └── __tests__
            ├── stringToUppercase.mock.input.js
            ├── stringToUppercase.mock.output.js
            ├── stringToUppercase.test.js
            ├── Markup.mock.input.json
            ├── Markup.test.js
            ├── Tooltip.mock.input.json
            └── Tooltip.test.js
```

**Going Deeper**

It is easy to see how complex view folders might get extremely cluttered after a while. Therefore views can have sub-components folders nested inside them. For example:

```powershell
views
    ├── Contact.jsx
    ├── About.jsx
    └── LandingPage.jsx
        ├── index.js
        ├── Container
        │   ├── index.jsx
        │   ├── config.js
        │   ├── stringToUppercase.js
        │   └── __tests__
        │       ├── stringToUppercase.mock.input.js
        │       └── stringToUppercase.mock.output.js
        ├── Markup
        │   ├── index.jsx
        │   ├── Tooltip.jsx
        │   ├── images
        │   │   ├── icon.svg
        │   │   ├── banner.jpeg
        │   │   └── icon-fallback.png
        │   └── __tests__
        │       ├── index.mock.input.json
        │       ├── index.test.js
        │       ├── Tooltip.mock.input.json
        │       └── Tooltip.test.js
        └── README.mdx
```

### Components

**Components are essentially reusable pieces of UI presentationa and state that can be anywhere in project**

For all intents and purposes items in `src/components` follow the exact rules that items in `src/views` do with one exception: They are not bound to any specific and can bb used and re-used anywhere in the project that accepts React components.

For example let us say we have a `Button` component in `src/components`:


```powershell
components
    ├── Alert.jsx
    ├── ButtonGroup
    └── Button
        ├── index.js
        ├── Container.jsx
        └── Markup.jsx
```

It can then be reused in the following files:

- `src/views/About/index.jsx`
- `src/views/User/tag.jsx`
- `src/components/ButtonGroup.jsx`
- `src/tooling/cms-config/widgets/FancyButton.jsx`

_Note: Humans are really bad at predicting the future. Therefore `src/components` should not be your first port of call. Rather (as a rule of thumb) embed a sub-component in the context where it is used and then only extract it into a modular version in `src/components` once you've used it at least three times in the project._

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

## File Structure

#### Determining scope of changes

All modules in this project are encapsulated and decoupled from one another, which means you need to explicitly call `import` or `require` to reference or use other modules in your existing module. This has the benefit of allowing one to see the scope of the changes that you are currently making by running the final regex in your IDE file-wide search or [grep](https://en.wikipedia.org/wiki/Grep):

For example if you are making changes to a module called `Button` either by means of `Button.jsx` or `Button/index.jsx` you can use the following [regular expression](https://en.wikipedia.org/wiki/Regular_expression):

```
(?=import|const).*Button(?=\/|')
```

Which might for example return:

```
// src/tooling/cms-config/widgets/explosion.jsx
import Button from '../../src/component/Button';

// src/views/LandingPage/index.jsx
import Button from '../src/component/Button/index.jsx';
```

**Exceptions**

However, note that there are a couple of edge-case exceptions to the above (please keep them in mind):
  - The relationship between files in **Data** and **Templates**/**Pages** which is mediated via [GraphQL](https://www.gatsbyjs.org/docs/querying-with-graphql/).
  - Plugins in `/gatsby-config.js` which can be called simply their names as a string.
  - Global `Sentry` JavaScript object added via `gatsby-plugin-sentry` plugin.
  - Values passed as `context` property to `createPage()` in `/gatsby-node.js` will be exposed in respective `src/template` files as a `pageContext` property. These values of `context` will also be exposed in any GraphQL query called in that `src/template` file (via [GraphQL variables](https://graphql.org/graphql-js/passing-arguments/)).

- [File structure](#)
- [Code style](#styling)