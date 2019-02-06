---
name: Tech Stack
menu: Project Overview

---

# 🤖 Tech Stack

**The following document provides an extensive overview of all the tech used in this project.** 

Apart from the _Overview_, _Linting_ and _Minor Tools_ sections, each section is dedicated to a specific technology:

- [General Principles](#general-principles)
- [Gatsby](#gatsby)
- [Redux](#redux)
- [Material UI](#material-ui)
- [Styled Components](#styled-components)
- [Docz](#docz)
- [Yarn](#yarn)
- [Linting](#linting)
- [Jest](#jest)
- [Minor/Auxillary Tooling](#minorauxillary-tooling)

## General Principles

### Markup and Interactivity

This project is built on [JAMStack principles](https://jamstack.org/):

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
>
> \- [https://jamstack.org](https://jamstack.org/)

In other words, there is [no server powering the front-end in production](https://en.wikipedia.org/wiki/Serverless_computing). This means that users essentially get static `.html`, `.css` and `.js` files straight from a CDN (via [Netlify](#netlify) in our case). This has various benefits such as improved security (since there is nothing to hack), reduced hosting costs and increased performance. 

To this end this project heavily relies on the following:
- [Gatsby](https://www.gatsbyjs.org/): A static site generator that generates prebuilt assets to serve straight from the CDN.
- [Netlify CMS](https://www.netlifycms.org/): A platform to manage content without a server (not to be confused with [Netlify itself](https://www.netlify.com/)).
- [Redux](https://redux.js.org/): A JavaScript library to modify global app state once JavaScript loads in the browser. 

In addition [Axios](#axios), [Lodash](#lodash) and [several minor tools](#other-tools) have also been included to improve developer experience and code readability.


### Styling

This project's approach to styling (as well as methods of extending the current design) is heavily inspired by [Brad Frost](http://bradfrost.com/)'s thinking on the subject of [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) and the principles of [Style Guide Driven Development](http://www.styleguidedrivendevelopment.com/).

In short:

>Design systems speed up your team’s workflow. Rather than reinventing the wheel every time a new request comes through, teams can reuse already established UI puzzle pieces to roll out new pages and features faster than ever before.
>
> \- [Atomic Design (2016)](http://atomicdesign.bradfrost.com/chapter-4/)

In the interest of development speed and overhead, a third-party [React component-based](https://reactjs.org/docs/react-component.html) library called [Material UI](https://material-ui.com/) has been pre-selected to underpin all styling in this project. [Material UI](https://material-ui.com/) is an unofficial implementation of the [Material Design Spec](https://material.io/) (an extremely comprehensive and well-documented UI design system) for React. 

It is important to note that the team behind the [Material Design Spec](https://material.io/) have the Material Design Spec via the [Material Components Web for React](https://github.com/material-components/material-components-web-react) library. However, at the time of writing [Material UI](https://material-ui.com/) is still considerably more comprehensive and well-documented than the [official React implementation of Material Design](https://github.com/material-components/material-components-web-react). Should the [official implementation of Material Design Spec](https://github.com/material-components/material-components-web-react) overtake [Material UI](https://material-ui.com/) in popularity and production-ready components, it will be re-evaluated to replacement Material UI in this project.

In addition, the widely popular [Styled Components](https://www.styled-components.com) library is used to create custom styling and override Material UI default styling.

## Gatsby

**Gatsby is a [React](https://reactjs.org) based, [GraphQL](https://graphql.org/) powered, [static site generator](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators).** 

Gatsby uses React to drive both static-generated page templating and dynamically loaded JavaScript content. This means that the project uses the same language ([JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)) for both static templating and in-page interactivity. Gatsby also abstracts away a lot of configuration and boilerplate (for example [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/)) usually associated with modern JavaScript projects, thereby providing a more unified/ready-to-go React architecture.

However, in addition to the above, keep in mind that (due to the fact that we are only delivering static assets) any custom server-side functionality/logic (if required) should be added either as a [Netlify function](https://www.netlify.com/docs/functions/) or via a decoupled API endpoint connected to a server (which might require coordination with a back-end developer).

### Configuration

The base [Gatsby](https://www.gatsbyjs.org/) configuration is extended as follows:

|Name|Purpose|
|---|---|
|[gatsby‑plugin‑manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)|Creates a [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) based on values passed in `src/tooling/gatsby‑config/manifestConfig.js`. This is required for basic [progressive web app](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive) behaviour.|
|[gatsby‑plugin‑offline](https://www.npmjs.com/package/gatsby-plugin-offline)|Creates and automatically updates a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) file every time `npm run build` runs. This ensures that new content can be synced locally by browsers to reduce mobile data costs and mitigate the negative user experience of unreliable internet connectivity (or even allow complete offline usage of the app).|
|[gatsby‑plugin‑material‑ui](@wapps/gatsby-plugin-material-ui)| Adds [Material UI](#material-ui) component styling during static page generation. This means that static-generated Gatsby files have [Material UI](#material-ui) styles applied inline before JavaScript loads client-side. Otherwise, the styling would only kick in once JavaScript runs.
|[gatsby‑plugin‑styled‑components](https://www.npmjs.com/package/gatsby-plugin-styled-components)| Adds custom [Styled Components](https://www.styled-components.com/) styling (useful for overriding default Material UI styling) during static page generation . This means that static-generated Gatsby files have CSS rules written in [Styled Components](https://www.styled-components.com/) applied inline before JavaScript loads client-side. Otherwise, the styling would only kick in once JavaScript runs. |
|[gatsby‑plugin‑react‑helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)|Adds [react-helmet](https://www.npmjs.com/package/react-helmet) integration for static-generated Gatsby files. This means that `<helmet>` information is already present in files before JavaScript loads.|
|[gatsby‑plugin‑hotjar](https://www.npmjs.com/package/gatsby-plugin-hotjar)| Automatically adds the required Hotjar script to each page (if config is supplied). No further integration is needed once the `HOTJAR_ID` and `HOTJAR_SNIPPET_VERSION` [environment variables]((https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)) are added to [Netlify](#netlify). To learn more about this project's Hotjar integration you can skip directly to the [Hotjar](https://pocketreporter-docs.netlify.com/docs-markdown-integrations#hotjar) in the ['Intergrations' section of the docs](https://pocketreporter-docs.netlify.com/docs-markdown-integrations). |
|[gatsby‑plugin‑google‑analytics](https://www.npmjs.com/package/gatsby-plugin-google-analytics)|Automatically inserts a Google Analytics initialisation script in each page. Apart from initialising GA (needed for [custom event tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/events)), it also automatically sends 'pageview' events to GA each time a Gatsby 'page' is viewed. Note that [react-ga](https://www.npmjs.com/package/react-ga) has also been included in this project for custom event tracking. However since this plugin already initialised GA, be mindful not to initialise GA again when using `react-ga`. To learn more about this project's Hotjar integration you can skip directly to the [Google Analytics](https://pocketreporter-docs.netlify.com/docs-markdown-integrations#analytics) in the ['Intergrations' section of the docs](https://pocketreporter-docs.netlify.com/docs-markdown-integrations).
|[gatsby‑plugin‑sentry](https://www.npmjs.com/package/gatsby-plugin-sentry)|Automatically adds the required Sentry remote error-tracking script to each page. This means that `Sentry` is now available in the `window` global scope. This plugin only initialises Sentry in your project. You need to manually add Sentry events via the `Sentry` object. Uses [Raven.js](https://www.npmjs.com/package/raven-js) under the hood. To learn more about this project's Hotjar integration you can skip directly to the [Sentry](https://pocketreporter-docs.netlify.com/docs-markdown-integrations#sentry) in the ['Intergrations' section of the docs](https://pocketreporter-docs.netlify.com/docs-markdown-integrations)

In addition to the above plugins, [Redux](#redux) is manually integrated into Gatsby via the `wrapRootElement` hook in `/config-browser.js` and `/config-ssr.js`. This exposes the [Redux Store](https://redux.js.org/api/store) via a [Provider](https://react-redux.js.org/api/provider) at the root of both the client-side JavaScript and the build process that compiles all static-generated Gatsby files. Meaning that queries can be made to the store regardless of the environment.

## Redux

**Redux is a tiny (1kb) JavaScript library for managing global application state.** 

Although it is environment agnostic (and can be used with pure JavaScript apps), it is very popular among React and Angular project. However, despite it's popular usage it has a bit of a steep learning curve because of its uncompromising adherence to [functional programming principles](https://en.wikipedia.org/wiki/Functional_programming) (due to its origin in the [Elm language](https://elm-lang.org) and [Flux architecture](https://facebook.github.io/flux/)).

At the same time, this adherence to FP allows one to implement super-powerful patterns (most notably [time travel](https://redux.js.org/recipes/implementing-undo-history) and [action composition](https://redux.js.org/api/compose)) when managing state, and manage/orhcestrate global JavaScript events in a structured manner (Very useful when several developers are working on the same project).

### Configuration

Core Redux is extended in the following manner:

|Name|Purpose|
|---|---|
|[react‑redux](https://www.npmjs.com/package/react-redux)|An official package maintained by the core [Redux](https://redux.js.org/) team. Includes a wrapper `<Provider />` component that exposes the [Redux store](https://redux.js.org/api/store) and selected [actions](https://redux.js.org/basics/actions) to all nested [children](https://reactjs.org/docs/react-api.html#reactchildren). It also includes low-level performance optimizations between [Redux](#redux) and the [React virtual DOM](https://reactjs.org/docs/faq-internals.html). |
|[redux‑devtools‑extension](https://www.npmjs.com/package/redux-devtools-extension)| [Middleware](https://redux.js.org/advanced/middleware) that exposes the data needed by Redux development/debugging tools (available for Chrome, Firefox, Electron and mobile devices as [per the following instructions](https://github.com/zalmoxisus/redux-devtools-extension#installation)). This `redux-devtools-extension` is automatically removed when compiling code for production.|
|[redux‑thunk](https://www.npmjs.com/package/redux-thunk)| [Middleware](https://redux.js.org/advanced/middleware) that consumes [thunks](https://en.wikipedia.org/wiki/Thunk) returned from [Redux actions](https://redux.js.org/basics/actions). This allows one to chain Redux actions together and initialises asynchronous [Redux actions](https://redux.js.org/basics/actions). The latter is not provided by [Redux](#redux) out of the box. `redux‑thunk` is a smaller and simpler alternative to solutions like [Redux Saga](https://redux-saga.js.org/) and [Redux Observables](https://redux-observable.js.org/) |
|[redux‑localstorage](https://www.npmjs.com/package/redux-localstorage)|[Middleware](https://redux.js.org/advanced/middleware) that automatically saves the [Redux store](https://redux.js.org/api/store) to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) each time an [action](https://redux.js.org/basics/actions) is submitted. It also hydrates the [Redux store](https://redux.js.org/api/store) from [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) when your app is initialised (if localStorage entry exists). By default no data from the [Redux store](https://redux.js.org/api/store) is saved to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). The names of existing root keys in your [store](https://redux.js.org/api/store) can be passed as an array of Strings to flag them for persistence. Furthermore, `null` can be passed instead of an array to flag the entire [store](https://redux.js.org/api/store) to be saved. The latter is not recommended due to the risk of unintentionally syncing sensitive data stored in the user session.|

The following conventions are used in all Redux files:

- All Redux files correspond to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- All Redux actions correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.

## Material UI

**Material UI is React library that provides ready-to-use interactive and components.**

The following [Material UI](https://material-ui.com/) modules are used:

|Name|Purpose|
|---|---|
|[@material‑ui/core](https://www.npmjs.com/package/@material-ui/core)|This package includes all core Material Design components and services found at [https://material-ui.com](https://material-ui.com). These can be imported directly into the project as [React components](https://reactjs.org/docs/react-component.html). For example: `import Card from '@material/icons/Card'`. Visit [https://material-ui.com/getting-started/usage/](https://material-ui.com/getting-started/usage/) for more details.|
|[@material‑ui/icons](https://www.npmjs.com/package/@material-ui/icons)|This package contains all standard SVG Material Design icons as listed on [https://material.io/tools/icons](https://material.io/tools/icons). Icons can be imported into the project via their name (converted into [Pascal case](Pascal,_Modula-2_and_Oberon)) as a [React component](https://reactjs.org/docs/react-component.html). For example: `import AddToQueueIcon from '@material/icons/AddToQueue'`. Please do not use the [font-icon version of Material Icons](https://google.github.io/material-design-icons/), since fonts are subject to [anti-aliasing](https://en.wikipedia.org/wiki/Spatial_anti-aliasing) which degrades the quality of icons (especially when very small). Visit [https://material-ui.com/style/icons/](https://material-ui.com/style/icons/) for more details. |
|[@material‑ui/lab](https://www.npmjs.com/package/@material-ui/lab)|This package contains [Material UI](https://material-ui.com/) components that are still under development, and have not been moved into `@material/core` yet. Note that the API of these components might be updated in future versions of [Material UI](https://material-ui.com/), however, they are considered production-ready in the current version. Visit [https://material-ui.com/lab/about/](https://material-ui.com/lab/about/) for more details.|

## Styled Components

**Styled Components is a library enables React component to be styled via the common CSS syntax**

[Material UI](https://material-ui.com/) uses a CSS-in-JavaScript tool (called [JSS](https://cssinjs.org/)) under the hood. It exposes a built-in `withStyles()` method (as part of `@material-ui/core`) for overriding default [Material UI](https://material-ui.com) styling. At the same time, [Material UI](https://material-ui.com) is upfront about the fact that Material UI is [completely interoperable with other CSS in JavaScript tooling](https://material-ui.com/guides/interoperability/). This project has (due to [Material UI](https://material-ui.com/)'s support for interoperability) opted to use a [Styled Components](https://www.styled-components.com) instead of the built-in Material UI [JSS](https://cssinjs.org/) hooks for the following reasons:

- [Styled Components](https://www.styled-components.com) has a massive online community compared to [JSS](https://cssinjs.org/).
- [Styled Components](https://www.styled-components.com) can be written in the regular CSS syntax (via [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)).
- [Stylelint](https://stylelint.io/) can be used to lint [Styled Components](https://www.styled-components.com) styling.
- [Styled Components](https://www.styled-components.com) supports [Sass](https://sass-lang.com/) logic out of the box.
- [Styled Components](https://www.styled-components.com) supports global [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) out of the box. 

### Conventions

**The following conventions are to be applied when using Styled Component in this project:**

**Consistency**: For the sake of consistency and readability, all styling should be done via [Styled Components](https://www.styled-components.com) (even if not override default [Material UI](https://material-ui.com/) styling). 

**Simplicity**: Although [Styled Components](https://www.styled-components.com) contains a [ThemeProvider component](https://www.styled-components.com/docs/advanced), it is recommended that this not be used since it impacts CSS readability with little benefit since most of the theming is already handled by [Material UI](https://material-ui.com/).

**Specificity**: If you are overriding existing [Material UI](https://material-ui.com/) styles you need to increase the [CSS-specificity of the overriding styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Avoid using `!important` in favour of a built-in [Styled Components specificity operator](https://material-ui.com/guides/interoperability/#controlling-priority) (`&&`). 

**Going Deeper**: If you wish to Style a [Material UI](https://material-ui.com/) element not exposed via the Material UI root API of the component, please use a combination of the `classes` [Material UI](https://material-ui.com/) attribute and [Styled Components](https://www.styled-components.com) nesting. This is further explained in the [Material UI Documentation](https://material-ui.com/guides/interoperability/#deeper-elements).

## Docz

## Yarn

<!-- Docz is a zero-config tool to write your documentation using just markdown and javascript.

It’s based on MDX, which lets you import and export code from your project and use JSX on markdown documents. It also provides ready to use components that make building your docs a breeze.

It combines the readability of markdown and the power of React components.

Since MDX uses the remark/rehype ecosystem, you can use its vast collection of plugins while writing your files.

Great, so we can write component documentation really quickly, and our documentation site is interactive! Take a look at the example repo bahmutov/cy-docz - just a couple of components, with Button component showing "onClick" handler that does "alert" message. Clone the repo, start the docz server with npm run dev and open localhost:3000 - the documentation is live


Docz’ high-level principles give you an idea of what they’re all about:

Zero config and easy. No unnecessary build steps with confusing setups.
Blazing fast. Always use the fastest things to build our tools.
Easy to customize. Create something that will be easy to use and customize.
MDX Based. Have the best standard to write documents.
Pluggable. Plugins are the best choice when you need to be custom and flexible.
Watch the demo video on the homepage to see just how nice this tool is to use.



Zero config
No worrying about complex configuration settings to build and run your documentation. With docz you can init your app with just a single command.


Really Blazing Fast
Docz uses Webpack 4 under the hood, optimized for lightning fast dev servers and build times, so you can focus on writing your docs!


Easy to customize
Easily create and modify themes for your documentation website, just like the one you see here!


Based on MDX
MDX is Markdown + JSX, bringing the world of components to Markdown. MDX makes it possible to import and use your components in a Markdown-style file. Docz fully leverages this, and provides many built-in components that augment and speed up your documentation workflow.


Fully pluggable
Plugins have always been a great way to allow for functional, flexible and optimized applications. In docz, you can use them to hook into the docz dataflow. Have a look at our existing plugins, or create your own plugins to help you build awesome docs!


TypeScript support
Docz provides full, native TypeScript support for your TSX components and custom types. In fact, all docz packages are built using TypeScript. Check out the API s

Using Docz's built-in components makes it easy to document your things. Using the power of components and AST parsing algorithms to source data, Docz renders your components on the fly, generates fully-formatted property tables, provides custom search, and so much more. The sky is the limit!

Libraries that make our lives easier are coming out every day. Styleguides and design systems are growing in popularity. Today, tools that allow us to be quick and effective in what we are doing are really necessary. We can't afford to lose time with tasks that should be trivial. This is why docz was created.

Documenting our things is one of the most important yet time-consuming processes when creating something new. We waste a lot of time with unnecessary setup in order to build something that has all the necessary content but also matches our own style.

Docz was built around a lot of programming concepts, techniques, tools, and with performance in mind to deliver a explicit project architecture. So, since we are thinking big and we can build something that will be really useful for you, we also think that you can learn and improve even more your process to write your documentation and create tools that can help other people too.

Architecture
We took a long time to find out a model that enabled us to achieve all of our goals and build something maintainable and consistent. A simple model to be scalable, easy to understand and maintain. So, after a few tries, we came to this architecture: -->

## Linting
<!-- For JavaScript there are solutions like ESLint that can check if your code is consistent. But ESLint requires a lot of configuration and while it can fix some things by itself, it often requires manual intervention when you screw up.

A mostly reasonable approach to React and JSX

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

Whether you’re just starting to learn JavaScript, or getting ready for your big interview with AirBnB, here are 5 style guides that can help you write cleaner code.

What the heck is a style guide?
A style guide is a set of standards that outline how code should be written and organized. As you read through these guides, you can get an idea for how code is written at the respective companies.

Why do we need style guides?
For one main reason: Everyone writes code differently. I may like to do something one way, and you may like to do it a different way. That’s all fine and dandy as long as we each work on our code. But what happens when you have 10, 100, or even 1,000 developers all working on the same codebase? Things get messy very quickly. Style guides are created so new developers can get up to speed on a code base quickly, and then write code that other developers can understand quickly and easily!

A mostly reasonable approach to JavaScript
Airbnb has one of the most popular JavaScript style guides on the internet. It covers nearly every aspect of JavaScript as well.

You can view Airbnb’s style guide on GitHub.

- Google JavaScript Style Guide
- Idiomatic JavaScript Style Guide
- JavaScript Standard Style Guide
- jQuery JavaScript Style Guide
- 

Enter linting, or static code analysis. A linter is a small program that checks code for stylistic or programming errors. (source) The term “lint” was coined in 1978 for a program which checked C code for errors before compilation. My best speculation on the reason the term was chosen is that it’s a metaphor for removing lint from a sweater. Get those little bits and pieces off your clothes so that you’re clean and ready to run. Using a linter, the developer can use software to do what it does best — quickly assess a large set of data to see if it conforms to specific rules.


The first JavaScript linter was released in 2002 by Douglas Crockford, called JSLint. This package was downloaded 84,385 times in the past month on npm compared to 10,880,367 downloads for ESLint in the same time period. There are two reasons why JSLint has less than 1% of the usage of ESLint as judged by monthly npm downloads, despite the fact that it was actually released first.

JSLint uses a license that is derivative of MIT except for the addition “The Software shall be used for Good, not Evil.” This addition makes the software “not-free” and has slowed, though not completely stopped, adoption by large organizations such as IBM.
JSLint does not allow for configuration, which means it enforces a single style guide, Douglas Crockford’s style guide. This is a strict style guide, and fully following it is a challenge few applications could reasonably achieve. It’s discussed elsewhere.
Because of how strict JSLint was, it was eventually forked into JSHint, eight years after the release of JSLint in 2010. JSHint finally allowed for configuration. Five years later, ESLint broke onto the scene with the ability to disable rules on individual lines. This functionality explains why ESLint currently enjoys approximately 5x the user base on npm compared to JSHint.

Recently, the Prettier package has taken the JavaScript world by storm. 
I haven’t used it yet and as such I won’t be covering it here.


When I tutor introductory computer science, one refrain I return to over and over is that most bugs during development are caused by typos. That could be an improperly placed semicolon or a failure to close a section of code. These kinds of code errors rarely make it into production code. However, spending time weedling them out is frustrating and wasteful, especially because there’s a better way.


Beyond eliminating typos and errors, there’s a greater question of consistent code style in a project. While it’s certainly possible to code at great speed without a consistent style or enforced rules, this becomes much more difficult as a team grows. Consistency in code style leads to much easier comprehension among teammates, quicker code reviews, and fewer bugs.

While working on introducing ESLint to a project that hadn’t used it before, I was faced with the open-ended question of which style guide to use. When trying to decide what to use for the project, I wanted to see a simple comparison of the most popular options. I wasn’t able to find a post quite like that, so I decided to write one. I’m comparing style guides for use with ECMAScript 2015+, including seeing what React with JSX support is like. 
All examples will be the default style behavior of each style guide with no additional rules added.

AirBnB is the winner of this roundup! It’s got react support out of the box. It’s got opinions and it’s not afraid to enforce them. Could its suggestions even make you a better programmer? Some people might say that. ;)

Check it out on Github: https://github.com/airbnb/javascript

Everyone writes JavaScript a little differently. We finally decided it was time that we got together and agree on how we write JavaScript.

We describe it as a mostly reasonable approach to JavaScript.

We’re releasing it under the MIT license, so please feel free to fork and use at your will. We don’t expect everyone to agree with the way we do things, but we do hope this can help kick start your own style guide as a template or map of some sort.

Hope it helps!

Formatting code and adhering to style guides can be a time-consuming and meticulous task. I remember when I first started programming, I would count the number of times I pressed the space bar when I wanted to indent on a new line. And at the end of every line, I would check for semi-colons and trailing commas. Thankfully, those days are over. I have found two well-known extensions that can scan your code and reformat it to a very legible and attractive style.

ESLint, is program that runs through your code and analyzes it for potential errors. The extension is highly configurable, with an assortment of built-in options for matching your company’s style guide. It can highlight errors while you type in your editor, as well as display an itemized list of errors in your console.

Combining Prettier with ESLint + Airbnb Style Guide
We will set this up so that Prettier will be our main extension for code formatting (based on the ESLint rules we define). Our goal will be to disable all formatting rules inside ESLint so that we will only use it for errors, and have Prettier format all our code instead.

Airbnb maintains a very popular JavaScript Style Guide that is used by many JavaScript developers worldwide. Following this style guide will ensure your code has a level of clarity that makes reading and maintaining your code easier for anyone who has to work on it.

ESLint is a tool for “linting” your code. It can analyze your code and warn you of potential errors. In order for it to work, you need to configure it with specific rules. Luckily, Airbnb — as part of their style guide — provides an ESLint configuration that anyone can use.

I believe it's the most comprehensive style guide that uses semicolons.

Share
Report
Save


level 2
isitfresh
7 points
·
8 months ago
and they were the first ones to document and release to the public such a thing at the time.

Not at all. There isn't really an alternative that compares. Its well maintained, includes a highly detailed style guide, enforced via eslint (and an alternative iirc). What's wrong with trailing commas?

In an ideal world I would work with only experienced JavaScript devs but in reality my team mainly consists of Java devs and interns. Having a strict linting profile keeps them inline (eg no for loops, while), and come code review I can always cite the style guide. At first my team is infuriated that I've put squiggly red lines under all their code. But they quickly learn the best practices... Resulting in good consistency, and that is very important when reading code written by some one else.

It's okay if you hate trailing comma, and it's okay if a few things are lacking in your opinion.

The point of the style guide, is that no matter what you do in a big enough team, people are going to have dissenting opinions.

I'm not a huge fan of everything the AirBnB style guide does, but a lot of devs are used to it. It just keeps things simple, and is supposed to stop any style based arguments

--- stylelint

Everyone wants a clean, consistent code base, no matter the language. Developers are accustomed to setting up linters in programming languages such as JavaScript and Python, but they rarely use a linter for style sheets. In this article, we’ll look at stylelint, a linter for style sheets.

We will learn why linting a style sheet matters, how stylelint brings order to a style sheet and how we can avoid errors. Finally, we will learn how to use stylelint and start linting as soon as possible.

Why Linting Is Important
A linter is a tool that analyzes code and reports errors when a piece of code doesn’t pass the rules defined in the linter’s configuration.

Many of us work on code bases that many people have access to. If no strict rules on coding style are adhered to, the code could become a mess very fast. Maybe your code is already a mess, and you want to clean it up and maintain this cleanliness over time. Even if you work on style sheets alone, you’ll still want the code to be consistent.

Of course, your team might have code styles rules written in plain text in some wiki somewhere. But there is always the human factor to account for: People make mistakes — never on purpose.

And even if you are obsessed with following the rules of a proper coding style, your colleagues or the contributors to your open-source project might not be. Without a linter, you’d need to check the code for styling and errors by yourself. No person should spend time on things that can be automated. A linter will significantly decrease the time spent on code review because you will not be spending time checking styles and writing a pile of comments about every error. You will be free to examine what the code does, rather how it looks.

Stylelint
Stylelint is a mighty, modern style sheet linter written in JavaScript by David Clark, Richard Hallows, Evilebot Tnawi and community. It is powerful in its speed, variety and quality of rules, and it’s totally unopinionated. Stylelint has over a hundred rules, and the number is growing. Fear not, though: All rules are disabled by default, and you enable only the ones you want. Stylelint can lint not only CSS but also Sass, SugarSS and any other syntaxes that PostCSS can parse (because stylelint is based on it).

Stylelint is to style sheets what ESLint is to JavaScript.

Rules
Stylelint has over a hundred rules, which can be divided into three groups: rules for styling, rules for the maintainability of code, and rules that check errors that would change what the code does in a browser. Style rules check for spacing (such as around colons), line breaks, indentation, etc. Rules for maintainability might report if an ID is used in a selector or if the !important keyword is used in a declaration. Rules for checking for errors might report an incorrect HEX color or a shorthand property that overrides another declaration.

I will not go over the style rules here (there are a ton of them). Rather, I want to describe some of the rules that help with maintainability and prevent errors.

The rule for preventing shorthand properties from overriding other declarations (or, in stylelint parlance, declaration-block-no-shorthand-property-overrides) would prevent a situation like this:

Stylelint is a powerful style sheet linter. It brings clarity to code and saves you from errors. It’s useful for everyone: individual developers, teams and open-source maintainers. Once you start using it, you will hear no more comments like, “You forgot to add a space here” or “You forgot to remove it there.” Happy developing, and may you have a peaceful code review.

https://github.com/styled-components/stylelint-processor-styled-components
https://github.com/styled-components/stylelint-processor-styled-components
https://github.com/styled-components/stylelint-processor-styled-components
https://github.com/styled-components/stylelint-processor-styled-components


Over the summer the team (led by Emil Goldsmith and Ismay Wolff) has been working hard on the stylelint processor for styled-components to make it production–ready. Today, we’re very excited to announce stylelint-processor-styled-components@1.0.0: reliably lint the CSS in your styled-components with the full power of stylelint!

If you’re new to the world of linters, stylelint is the most popular tool to catch errors in your CSS before they happen. It’s invaluable to make sure your code works by detecting mistakes such as invalid colors, shorthands and many more. (150+ rules, excluding plugins!)

With the processor we enable you to use the mature ecosystem around stylelint to make sure your styled-components CSS is as solid as can be.

Note: If you’ve tried the processor before but had issues, give it another go now—you’ll be surprised!

1. Installation
You need:

stylelint (duh)
stylelint-processor-styled-components to extract styles from styled-components
stylelint-config-styled-components to configure a couple of rules to fit with styled-components’ style of writing CSS
Your favorite stylelint config! (for example stylelint-config-standard)

2. Setup
Add a .stylelintrc file to the root of your project:

Interpolation Tagging
Sometimes stylelint throws an error (e.g. CssSyntaxError) even though nothing is wrong with your code. This is often due to an interpolation, more specifically the fact that the processor doesn't know what you're interpolating.

When you have interpolations in your styles the processor can’t know what they are, so it makes a good guess and replaces them with a syntactically equivalent placeholder value. Since stylelint is not a code flow analysis tool this doesn't cover all edge cases and the processor will get it wrong every now and then.

Interpolation tagging allows you to tell the processor what an interpolation is; it can then replace it with a syntactically correct value. For example:

Processors
Processors are community packages that enable stylelint to extract styles from within non-stylesheet files.

These processors can only be used with the CLI and the Node API, not with the PostCSS plugin. (The PostCSS plugin will ignore them.)

stylelint-processor-arbitrary-tags: Lint within user-specified tags.
stylelint now has built-in support for many common non-stylesheet files. You may no longer need to use the following processors:

stylelint-processor-glamorous: Lint glamorous and related css-in-js libraries using object literals.
stylelint-processor-markdown: Lint within Markdown's fenced code blocks.
stylelint-processor-styled-components: Lint styled-components and related CSS-in-JS libraries using tagged template literals.

A robust, configurable and extensible linter written in Node.Js. A code quality tool that empowers individuals and teams to write error-free and consistent CSS code

As front-end development has matured, the use of tools addressing code quality has grown substantially.

This is perhaps most evident when looking at the JavaScript ecosystem. Using a JavaScript linter is now the expected standard for front-end developers to ensure that their code is well structured and consistent. In fact, in my recent tooling survey, the vast majority of developers stated that they lint their JavaScript.

When it comes to writing CSS, the drive towards using code quality tools has been a little slower, with the majority of developers in that same survey stating that they chose not to use a CSS linter in their workflow.

I want to address this shortfall today, looking at one tool in particular that has raised the bar when it comes to linting stylesheets: stylelint.

It’s worth noting up front that although I reference CSS throughout this article, these references are interchangeable with a preprocessing language such as Sass. Stylelint can evaluate Sass and Less files as well as plain CSS and we’ll look at this in more detail later in the article.

When CSS linting was first introduced as a concept, it was fairly polarizing. Shortly after CSS Lint was introduced back in 2011, I remember reading an article by Matt Wilcox called CSS Lint is harmful, which criticized the opinionated nature of some of its rules – a sentiment that was shared by many in the community.

Looking back, CSS Lint was much like the first JavaScript linting tools that were available, such as JSLint – opinionated and not very flexible. However, while tools such as JSHint and ESLint emerged and pushed JavaScript linting forward, alternatives in the CSS linting landscape were non-existent.

That is until stylelint arrived on the scene.

There are a few reasons why I think stylelint is now the best tool available when it comes to linting your CSS.

Firstly, it is completely un-opinionated. That means you can enable as few or as many rules as you like, with a number of its rules giving you options to configure them to your preferences.

Also, it has a huge array of rules available – over 150 in fact, not including language specific rules for preprocessor specific syntax. Spending a little time to look through these is invaluable to building up a set of rules that fits how you write your styles.

It is also very flexible, understanding CSS and CSS-like syntax such as SCSS and Less. So whether you want to lint preprocessor code or vanilla CSS, stylelint has you covered.

Lastly, and perhaps most importantly, its documentation is excellent. Want to see what rules are available? Check out the detailed documentation covering all available rules. How about some advice on how to contribute a new rule that you might like? They have a great developer guide to help you with that too.

There's an extraordinary amount of discipline in good CSS. That's why we spend so much time talking about methodologies like SMACSS, ACSS, BEM, SUITCSS, ITCSS, and so on. We all know that it's very easy to write CSS very badly, so in our own work we need to establish an intelligent strategy and doggedly stick to it if we're going to write stylesheets that won't make us cringe next week.

stylelint's ambitious goal is to supplement our discipline with automatic enforcement — to provide a core set of rules and a pluggable framework that CSS authors can use to enforce their own strategies.

Give it a try and let us know how to works for you. And if you have ideas for improvement, pitch in! Contribute rules, enhancements, tests, bug fixes, documentation, new ideas, or just feedback. There's work to be done for developers of all levels. -->

## Jest

<!-- Jest is a test runner developed by Facebook, aiming to deliver a battery-included unit testing solution. You can learn more about Jest on its official documentation.

est can be used to generate coverage reports in multiple formats. The following is a simple example to get started with:

Extend your jest config (usually in package.json or jest.config.js) with the collectCoverage option, and then add the collectCoverageFrom array to define the files for which coverage information should be collected.

Placing Test Files
By default, Jest will recursively pick up all files that have a .spec.js or .test.js extension in the entire project. If this does not fit your needs, it's possible to change the testRegex in the config section in the package.json file.

Jest recommends creating a __tests__ directory right next to the code being tested, but feel free to structure your tests as you see fit. Just beware that Jest would create a __snapshots__ directory next to test files that performs snapshot testing.

est is a library for testing JavaScript code. It's an open source project maintained by Facebook, and it's especially well suited for React code testing, although not limited to that: it can test any JavaScript code. Jest is very fast and easy to use

Jest is a library for testing JavaScript code.

It’s an open source project maintained by Facebook, and it’s especially well suited for React code testing, although not limited to that: it can test any JavaScript code. Its strengths are:

it’s fast
it can perform snapshot testing
it’s opinionated, and provides everything out of the box without requiring you to make choices
Jest is a tool very similar to Mocha, although they have differences:

Mocha is less opinionated, while Jest has a certain set of conventions
Mocha requires more configuration, while Jest works usually out of the box, thanks to being opinionated
Mocha is older and more established, with more tooling integrations
In my opinion the biggest feature of Jest is it’s an out of the box solution that works without having to interact with other testing libraries to perform its job.

Visual Studio Code is a great editor for JavaScript development. The Jest extension offers a top notch integration for our tests.

Once you install it, it will automatically detect if you have installed Jest in your devDependencies and run the tests. You can also invoke the tests manually by selecting the Jest: Start Runner command. It will run the tests and stay in watch mode to re-run them whenever you change one of the files that have a test (or a test file):

napshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component.

A similar approach can be taken when it comes to testing your React components. Instead of rendering the graphical UI, which would require building the entire app, you can use a test renderer to quickly generate a serializable value for your React tree. Consider this example test for a simple Link component:

The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. Jest uses pretty-format to make snapshots human-readable during code review. On subsequent test runs Jest will simply compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code that should be fixed, or the implementation has changed and the snapshot needs to be updated.

More information on how snapshot testing works and why we built it can be found on the release blog post. We recommend reading this blog post to get a good sense of when you should use snapshot testing. We also recommend watching this egghead video on Snapshot Testing with Jest.

It's straightforward to spot when a snapshot test fails after a bug has been introduced. When that happens, go ahead and fix the issue and make sure your snapshot tests are passing again. Now, let's talk about the case when a snapshot test is failing due to an intentional implementation change.

One such situation can arise if we intentionally change the address the Link component in our example is pointing to.

React and React Native components are a good use case for snapshot testing. However, snapshots can capture any serializable value and should be used anytime the goal is testing whether the output is correct. The Jest repository contains many examples of testing the output of Jest itself, the output of Jest's assertion library as well as log messages from various parts of the Jest codebase. See an example of snapshotting CLI output in the Jest repo.

Snapshot testing and visual regression testing are two distinct ways of testing UIs, and they serve different purposes. Visual regression testing tools take screenshots of web pages and compare the resulting images pixel by pixel. With Snapshot testing values are serialized, stored within text files and compared using a diff algorithm. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the Jest blog.

Jest is a testing platform for client-side JavaScript applications and React applications specifically. Learn more about the platform from the Jest official website.

You can run and debug tests with Jest right in PyCharm. You can see the test results in a treeview and easily navigate to the test source from there. Test status is shown next to the test in the editor with an option to quickly run it or debug it.

At the heart of building durable and reliable React applications is a solid understanding of testing, starting with Jest. In this course, Testing React Applications with Jest, you will learn everything you need to do to create solid tests for your React components and applications. First, you’ll learn how to install Jest on any machine, run tests with it via the command line, and integrate it with any Node project. Next, you’ll dive into the various testing techniques, including globals, mocking, and snapshot testing that you can use to make your tests more readable and efficient. Finally, you'll explore how to use all these techniques to test React components and the applications they belong to. When you’re finished with this course, you’ll be able to immediately start writing tests for your React applications, discuss testing strategies and techniques in the workplace, and facilitate development by setting up and configuring Jest. -->

## Minor/Auxillary Tooling

<!-- The following minor helper libaries are also included in the project:

|name|description|
|---|---|
|[uuid](https://www.npmjs.com/package/uuid)|Generates a unique [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) key. Useful for providing unique identifiers to entries in [Redux](#redux). Please use the [version 4 implementation](https://www.npmjs.com/package/uuid#version-4) when using this library.|
|[change‑case](https://www.npmjs.com/package/change-case)| Exposes methods that allow the reformatting of strings into specific casing. `change-case` is very useful in `/src/tooling/gatsby-node` or `/src/tooling/cms-config` where you might want to use the same string as snake-case in GraphQL (`snake` method), title-case when creating a file path (`param` method) and/or sentence-case when displayed in the UI (`sentence` method).

--- Prop Types
---  Husky

When doing javascript development it is common to have linting and test tasks in your package.json file.

It is easy to forget to run these common tasks before pushing code and this can result in a broken build (if using continues integration) or the next developer will see the issues when pulling down the latest code.

A way to work around this problem is to use git hooks that will allow you to hook into the git workflow to run tasks. Git hooks are not easy to share across a development team as git hooks are located in the .git/hooks folder.

Luckily a npm package called Husky can help solve this issue. Husky describes itself as “Git hooks made easy”. After using it I must agree that it does indeed do just that!

Installing Husky is as simple as an npm install from the terminal in your project.

Simply put, git hooks are custom scripts, which can be run automatically when specific events occur. There are client-side hooks which are triggered on actions such as committing or merging. Server-side hooks run in situations such as receiving push data from the client.

The hooks can perform any custom logic and most importantly reject the action performed if something is not in order. For example, you can abort commit if its message does not contain issue tracker's issue ID. Or, you can reject it if static code analysis fails. It can be pretty useful if you want to make sure your codebase stays clean or you want to enforce certain quality policies.

But how can you actually install and manage these hooks? Whenever you clone a git repository, all the git's data for your project is stored in .git directory inside your folder. It contains several files and sub-directories, one of which is called hooks. Inside you'll find a bunch of files.

Now, let's look at some specific examples of what can be achieved with git hooks. Since they're just scripts, you can do pretty much anything. Usually, that means making various quality checks.

You can make sure user has their name and email filled. You can check the commit message is properly formatted. You can try to build your app and reject the commit if the build fails. You can run tests to make sure they are passing before commit.

Typical usage is also static code analysis or linting. That means checking your code for common issues, bad practices, naming conventions and more. It can also be useful to run a tool such as Prettier to make sure the code is nicely formatted before commit. This saves many headaches during code reviews. You can even check your code for security vulnerabilities with a tool like Snyk.

The problem with git hooks is that they are in the .git directory, which means that they are not committed hence not shared between developers.

Husky takes care of this: when a developer runs npm install, it will automatically create the scripts in .git/hooks:
Git hooks are a convenient way to automate tasks during your git flow and protect you from pushing unwanted code by mistake.

Check for linting errors
If you have tools to check the code quality or formatting, you can run it on a pre-commit hook:

...
Prop Types Extended


- Axios

**Axios is a [JavaScript Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  library that wraps outgoing HTTP request and their responses.**

The native [JavaScript fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (introduced in the [ES2015 spec](http://www.ecma-international.org/ecma-262/6.0/index.html)) more often than not negates the need for third-party libraries/abstractions to handle HTTP requests (for example the `$.ajax()` method in [jQuery](https://jquery.com/)). Furthermore, with the widespread use of the [WHATWG fetch polyfill](https://www.npmjs.com/package/whatwg-fetch) the cross-browser nightmare that was HTTP requests a couple of years ago are a thing of the past.

Regardless, there are still (although diminished) benefits to including a thin abstraction layer over the `fetch` API. In most cases this abstraction can be a single JavaScript
 helper method, that wraps the `fetch` API in some basic [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) and helpful JavaScript [utilities](https://en.wikipedia.org/wiki/Helper_class). However in the interest of standardising behaviour across this project the extremely popular [Axios helper library](https://www.npmjs.com/package/axios) is included to handle HTTP requests.

Some of the quality of life benefits provided by Axios:
- A single method to do HTTP requests in both the browser and NodeJS (on which [Gatsby](#gatsby)'s static asset generation is built).
- Allows the [cancellation of HTTP requests](https://github.com/axios/axios#cancellation) (which is not production ready yet (by means of [AbortionController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) in native JavaScript).
- Built-in protection against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery).
- Automatic JSON [parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [serialization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
- Abstracting away error handling into a single `.catch()` method.
- Setting default [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) and [parameters](https://en.wikipedia.org/wiki/Query_string).
- Pluggin transformer/interception function straight into either the [HTTP request](https://developer.mozilla.org/en-US/docs/Web/API/Request) or [HTTP response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

Have a look at the [Axios repository on Github](https://github.com/axios/axios
) for the official documentation.

- Lodash

**Lodash is a JavaScript library providing utility functions for common programming tasks**

Contextually, [Lodash](https://lodash.com/) holds a similar position to [Axios](#axios) in modern JavaScript development. A lot of the benefit derived from helper libraries like [jQuery](https://jquery.com/) and [Undersore.js](https://underscorejs.org/) have been made obsolete since the release of the [ES2015](http://www.ecma-international.org/ecma-262/6.0/index.html) and [ES2016](http://www.ecma-international.org/ecma-262/7.0/index.html) JavaScript specs.

However, there are still significant benefits (although considerably smaller than before) in integrating a helper library into a modern JavaScript project, since there are common programming operations that are not yet (or possibly ever going to be) present in native JavaScript. This project makes use of [Lodash](https://lodash.com/) (a more comprehensive and performant permutation of [Undersore.js](https://underscorejs.org/)) to fill these gaps in the native JavaScript spec. Most of these functions can easily be written by hand, however [Lodash](https://lodash.com/) provides a well-tested and standardized API for contributors to use. 

Lodash has [treeshaking](https://webpack.js.org/guides/tree-shaking/) built-in so it is advised to not import the entire lodash library (`import _ from 'lodash'`), but rather only the method needed (`import { uniq } from 'lodash'`). In addition, it is also advised to only use [Lodash](https://webpack.js.org/guides/tree-shaking/) methods if they do not exist in the native JavaScript spec and/or cannot be [polyfilled](https://en.wikipedia.org/wiki/Polyfill_(programming)) (for example `.find()` or the rest/spread operator). -->
