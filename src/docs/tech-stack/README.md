---
name: Tech Stack
menu: Overview
---

# 🤖 Tech Stack

Technologies are divided into the following broad categories:

- [Markup and interactivity](#markup-and-interactivity)
- [Styling](#styling)

## Markup and interactivity

This includes the following technologies:

- [Gatsby](#gatsby)
- [Redux](#redux)
- [Axios](#axios)
- [Lodash](#lodash)

This project is built on [JAMStack principles](https://jamstack.org/):

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
>
> \- [https://jamstack.org](https://jamstack.org/)

In other words, there is [no server powering the front-end in production](https://en.wikipedia.org/wiki/Serverless_computing). This means that a user receives static `.html`, `.css` and `.js` files straight from the host ([Netlify](#netlify) in this case). This has various benefits such as improved security, reduced hosting costs and increased performance. To this end this project heavily relies on [Gatsby](https://www.gatsbyjs.org/) to generate prebuilt assets and [Redux](https://redux.js.org/) to change data once JavaScript loads.

In addition, [Axios](#axios) is also included as a way to standardise HTTP requests from the project to remote sources, while [Lodash](#) is included as a way to standardise basic low-level data manipulation. For predictability, these should always be used in favour of bespoke solutions (even if the bespoke solution in question is more performant or technically more 'correct').

As an aside, [Axios](#axios) might possibly be replaced by [Apollo](https://www.apollographql.com/) or [Relay](https://facebook.github.io/relay/) in future versions of this project if the relevant [API](#api) endpoints are configured to support GraphQL.


### Gatsby

_Note that this means any server-side functionality should be added either as a decoupled third-party or custom API endpoint. This might require coordination with a back-end developer._

The base [Gatsby](https://www.gatsbyjs.org/) configuration is extended as follows:

|Name|Purpose|
|---|---|
|[gatsby‑plugin‑manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)|Creates a [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) based on the `name`, `theme` and `background` values in the `.starterpack` file. The value of `name` is used for both the `name` and `short_name` values in the manifest. In addition, `color` corresponds to `theme_color` and `background` to `background_color` in the manifest. |
|[gatsby‑plugin‑offline](https://www.npmjs.com/package/gatsby-plugin-offline)|Creates and automatically updates the [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) file every time `npm run build` runs. This ensures that new content can be synced locally by browsers to reduce mobile data costs, guard against unstable internet connectivity and allow complete offline usage.|
|[gatsby‑plugin‑material‑ui](@wapps/gatsby-plugin-material-ui)| Adds [Material UI](#material-ui) component styling during static page generation. This means that static-generated Gatsby files have [Material UI](#material-ui) styles applied inline before JavaScript loads client-side. Otherwise, the styling would only kick in once JavaScript runs.
|[gatsby‑plugin‑styled‑components](https://www.npmjs.com/package/gatsby-plugin-styled-components)| Adds custom [Styled Components](https://www.styled-components.com/) styling during static page generation. This means that static-generated Gatsby files have CSS rules written in [Styled Components](https://www.styled-components.com/) applied inline before JavaScript loads client-side. Otherwise, the styling would only kick in once JavaScript runs. |
|[gatsby‑plugin‑react‑helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)|Adds [react-helmet](https://www.npmjs.com/package/react-helmet) integration for static-generated Gatsby files. This means that `<helmet>` information is already present in files before JavaScript loads.|
|[gatsby‑plugin‑hotjar](https://www.npmjs.com/package/gatsby-plugin-hotjar)| Automatically adds the required Hotjar script to each page. No further integrations are needed once the `HOTJAR_ID` and `HOTJAR_SNIPPET_VERSION` [environment variables]((https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)) are added to [Netlify](#netlify). Learn more about this project's Hotjar integration at the [Hotjar section](#hotjar) in this `README.md` file. |
|[gatsby‑plugin‑google‑analytics](https://www.npmjs.com/package/gatsby-plugin-google-analytics)|Automatically inserts a Google Analytics initialisation script in each page. Apart from initialising GA (needed for custom events), it also automatically sends 'pageview' events to GA. Note that [react-ga](https://www.npmjs.com/package/react-ga) has also been included in this project for custom event tracking (requiring no initialisation or integration). To learn more about this project's Google Analytics integration you can skip directly to the [Google Analytics](#google-analytics) section.
|[gatsby‑plugin‑sentry](https://www.npmjs.com/package/gatsby-plugin-sentry)|Automatically adds the required Sentry script to each page. This means that `Sentry` is now available in the `window` global scope. This plugin only initialises Sentry in your project. You need to manually add Sentry events via the `Sentry` object. To learn more you can skip directly to the [Sentry](#sentry) section. Uses [Raven.js](https://www.npmjs.com/package/raven-js) under the hood.|

In addition to the above plugins, [Redux](#redux) is manually integrated via the `config-browser.js` and `config-ssr.js` files. This exposes the [Redux Store](https://redux.js.org/api/store) via a [Provider](https://react-redux.js.org/api/provider) at the root of both the client-side JavaScript and the build process that compiles all static-generated Gatsby files. 

This means that queries can be made to the store regardless of the environment.

### Redux

_Redux has a bit of a steep learning curve due to its uncompromising adherence to [functional programming principles](https://en.wikipedia.org/wiki/Functional_programming). However, this adherence to FP allows us to implement some super-powerful patterns (most notably [time travel](https://redux.js.org/recipes/implementing-undo-history) and [action composition](https://redux.js.org/api/compose))._

Core Redux is extended in the following manner:

|Name|Purpose|
|---|---|
|[react‑redux](https://www.npmjs.com/package/react-redux)|An official package maintained by the core [Redux](https://redux.js.org/) team. Includes a wrapper `<Provider />` component that exposes the [Redux store](https://redux.js.org/api/store) and selected [actions](https://redux.js.org/basics/actions) to its [children](https://reactjs.org/docs/react-api.html#reactchildren). It also includes low-level performance optimizations between [Redux](#redux) and the [React virtual DOM](https://reactjs.org/docs/faq-internals.html). |
|[redux‑devtools‑extension](https://www.npmjs.com/package/redux-devtools-extension)| [Middleware](https://redux.js.org/advanced/middleware) that exposes the data needed by Redux development/debugging tools (available for Chrome, Firefox, Electron and mobile devices as [per the following instructions](https://github.com/zalmoxisus/redux-devtools-extension#installation)). This is removed in production.|
|[redux‑thunk](https://www.npmjs.com/package/redux-thunk)| [Middleware](https://redux.js.org/advanced/middleware) that consumes [thunks](https://en.wikipedia.org/wiki/Thunk) returned from [Redux actions](https://redux.js.org/basics/actions). This allows us to chain actions together and initialises asynchronous [Redux actions](https://redux.js.org/basics/actions). The latter is something that is not provided in [Redux](#redux) out of the box. A smaller and simpler alternative to solutions like [Redux Saga](https://redux-saga.js.org/) and [Redux Observables](https://redux-observable.js.org/) |
|[redux‑localstorage](https://www.npmjs.com/package/redux-localstorage)|[Middleware](https://redux.js.org/advanced/middleware) that automatically saves the [Redux store](https://redux.js.org/api/store) to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) each time an [action](https://redux.js.org/basics/actions) is submitted. It also hydrates the  [Redux store](https://redux.js.org/api/store) from [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) when Redux is initialised (if saved). By default no data from the [Redux store](https://redux.js.org/api/store) is saved to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). The names of the root keys [store](https://redux.js.org/api/store) can be passed as an array of Strings to flag them for persistence. Furthermore, `null` can be passed instead of an array to flag the entire [store](https://redux.js.org/api/store) to persist. The latter is not recommended due to the risk of accidentally syncing sensitive user information.|

The following conventions are used in all Redux files:

- All Redux files correspond to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- All Redux actions correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.

### Axios

The native [JavaScript fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (introduced in the [ES2015 spec](http://www.ecma-international.org/ecma-262/6.0/index.html)) more often than not negates the need for additional libraries to handle HTTP requests (for example the `$.ajax()` method in [jQuery](https://jquery.com/)). Furthermore, with the widespread use of the [WHATWG fetch polyfill](https://www.npmjs.com/package/whatwg-fetch) the cross-browser nightmare that was HTTP requests a couple of years ago are a thing of the past.

Regardless, there are still benefits to including a very thin abstraction over the `fetch` API. For example, the widely popular [Axios](https://www.npmjs.com/package/axios) (included in this project) wraps the `fetch` API in some [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) and helpful JavaScript [utilities](https://en.wikipedia.org/wiki/Helper_class).

Some of these, amongst others, are:
- A single method to do HTTP requests in both the browser and NodeJS (on which [Gatsby](#gatsby)'s static asset generation is built).
- Allows the [cancellation of HTTP requests](https://github.com/axios/axios#cancellation) (which is not production ready in native JavaScript by means of [AbortionController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) yet).
- Built-in protection against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery).
- Automatic JSON [parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [serialization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
- Abstracting away error handling into a single `.catch()` method.
- Setting default [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) and [parameters](https://en.wikipedia.org/wiki/Query_string).
- Plugs a normalisation function straight into either the [HTTP request](https://developer.mozilla.org/en-US/docs/Web/API/Request) or [HTTP response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

Have a look at the [Axios repository on Github](https://github.com/axios/axios
) for the official documentation.

### Lodash

Contextually, the implementation of [Lodash](https://lodash.com/) is quite similar to [Axios](#axios). A lot of the benefit derived from helper libraries like [jQuery](https://jquery.com/) and [Undersore.js](https://underscorejs.org/) have been made obsolete since the release of the [ES2015](http://www.ecma-international.org/ecma-262/6.0/index.html) and [ES2016](http://www.ecma-international.org/ecma-262/7.0/index.html) JavaScript specs.

However, there is still significant benefit (although considerably smaller) in integrating a helper library into a modern JavaScript project, since there is a small section of utilities that are not present in native JavaScript yet (or possibly ever). 

The project makes use of [Lodash](https://lodash.com/) (a more comprehensive and performant permutation of [Undersore.js](https://underscorejs.org/)) to fill these gaps in the native JavaScript spec. Most of these functions can easily be written by hand, however [Lodash](https://lodash.com/) provides a well-tested and standardized API for contributors to use. 

Lodash has [treeshaking](https://webpack.js.org/guides/tree-shaking/) built-in so it is advised to not import the entire lodash library (`import _ from 'lodash'`), but rather only the method needed (`import { uniq } from 'lodash'`). In addition, it is also advised to only use [Lodash](https://webpack.js.org/guides/tree-shaking/) methods if they do not exist in the native JavaScript spec and/or cannot be [polyfilled](https://en.wikipedia.org/wiki/Polyfill_(programming)).

## Styling

This includes the following technologies:

- [Material UI](#material-ui)
- [Styled Components](#styled-components)

**This project's approach to styling (as well as methods of extending the current design) is heavily inspired by [Brad Frost](http://bradfrost.com/)'s thinking on the subject of [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) and the principles of [Style Guide Driven Development](http://www.styleguidedrivendevelopment.com/).**

In short:

>Design systems speed up your team’s workflow. Rather than reinventing the wheel every time a new request comes through, teams can reuse already established UI puzzle pieces to roll out new pages and features faster than ever before.
>
> \- [Atomic Design (2016)](http://atomicdesign.bradfrost.com/chapter-4/)

In the interest of speed, a third-party [React component-based](https://reactjs.org/docs/react-component.html) library called [Material UI](https://material-ui.com/) has been pre-selected to underpin all styling in this project. [Material UI](https://material-ui.com/) is an unofficial implementation of the [Material Design Spec](https://material.io/) (an extremely comprehensive and well-documented UI design system) for React. 

It is important to note that the team behind the [Material Design Spec](https://material.io/) have their own implementation of their principles via [Material Components Web for React](https://github.com/material-components/material-components-web-react) library. However, the unofficial [Material UI](https://material-ui.com/) implementation has been in development since 2017, while the [official Material Design](https://github.com/material-components/material-components-web-react) implementation only started development in 2018. 

At the time of writing [Material UI](https://material-ui.com/) is still considerably more comprehensive and well-documented than the [official React implementation of Material Design](https://github.com/material-components/material-components-web-react). Should the [official implementation of Material Design Spec](https://github.com/material-components/material-components-web-react) overtake [Material UI](https://material-ui.com/) in popularity and production-ready components, it will be re-evaluated as an option for implementation into this project.

### Material UI

[Material UI](https://material-ui.com/) is integrated into Gatsby by means of [gatsby-plugin-material-ui](@wapps/gatsby-plugin-material-ui).

The following [Material UI](https://material-ui.com/) modules are used:

|Name|Purpose|
|---|---|
|[@material‑ui/core](https://www.npmjs.com/package/@material-ui/core)|This package includes all core Material Design components and services found at [https://material-ui.com](https://material-ui.com). These can be imported directly into the project as [React components](https://reactjs.org/docs/react-component.html). For example: `import Card from '@material/icons/Card'`. Visit [https://material-ui.com/getting-started/usage/](https://material-ui.com/getting-started/usage/) for more details.|
|[@material‑ui/icons](https://www.npmjs.com/package/@material-ui/icons)|This package contains all standard SVG Material Design icons as listed on [https://material.io/tools/icons](https://material.io/tools/icons). Icons can be imported into the project via their name (converted into [Pascal case](Pascal,_Modula-2_and_Oberon)) as a [React component](https://reactjs.org/docs/react-component.html). For example: `import AddToQueueIcon from '@material/icons/AddToQueue'`. Visit [https://material-ui.com/style/icons/](https://material-ui.com/style/icons/) for more details.|
|[@material‑ui/lab](https://www.npmjs.com/package/@material-ui/lab)|This package contains [Material UI](https://material-ui.com/) components that are still under development, and have not been moved into `@material/core` yet. Note that their API might be updated in future versions of [Material UI](https://material-ui.com/), however, they are considered production-ready in the current version. Visit [https://material-ui.com/lab/about/](https://material-ui.com/lab/about/) for more details.|

### Styled Components

[Material UI](https://material-ui.com/) uses a CSS-in-JavaScript tool (called [JSS](https://cssinjs.org/)) under the hood. It exposes a built-in `withStyles()` method (as part of `@material-ui/core`) for overriding  [Material UI](https://material-ui.com) default styling. However, at the same time, [Material UI](https://material-ui.com) is extremely explicit about the fact that it is [completely interoperable with other CSS in JavaScript tooling](https://material-ui.com/guides/interoperability/). 

This project has (due to [Material UI](https://material-ui.com/)'s support for interoperability) opted to use a library called [Styled Components](https://www.styled-components.com) instead of the built-in [JSS styling](https://cssinjs.org/) for the following reasons:

- [Styled Components](https://www.styled-components.com) has a massive online community compared to [JSS](https://cssinjs.org/).
- [Styled Components](https://www.styled-components.com) can be written in the regular CSS syntax (via [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)).
- [Stylelint](https://stylelint.io/) can be used to lint [Styled Components](https://www.styled-components.com) styling.
- [Styled Components](https://www.styled-components.com) also enables [Sass](https://sass-lang.com/) logic in your styling.
- [Styled Components](https://www.styled-components.com) supports global [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) out of the box. 

For the sake of consistency and readability, all styling should be done via [Styled Components](https://www.styled-components.com) (even if outside [Material UI](https://material-ui.com/)). Note that although [Styled Components](https://www.styled-components.com) contains a [ThemeProvider component](https://www.styled-components.com/docs/advanced), it is recommended that this not be used since it impacts CSS readability with very little benefit since most of the theming is already handled by [Material UI](https://material-ui.com/). 

Furthermore, if you are overriding existing [Material UI](https://material-ui.com/) styles you need to increase the [CSS-specificity of the overriding styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Avoid using `!important` in favour of a built-in [Styled Components specificity operator](https://material-ui.com/guides/interoperability/#controlling-priority) (`&&`). If you wish for the styling of a [Material UI](https://material-ui.com/) element to not be exposed via the root of the component, please use a combination of the `classes` [Material UI](https://material-ui.com/) attribute and [Styled Components](https://www.styled-components.com) nesting. This is further explained in the [Material UI Documentation](https://material-ui.com/guides/interoperability/#deeper-elements).
