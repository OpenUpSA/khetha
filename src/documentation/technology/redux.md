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