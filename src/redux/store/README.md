# store

**This file builds the entire Redux store and exports it as is for usage throughout project. **

This page covers the following:

- [Redux Provider](#redux-provider)
- [initialState.json](#initialstatejson)
- [index.js](#indexjs)

## Redux Provider

The store is initialised in the project through the `<Provider>` component provided by the `react-redux` library. Since we want to store to be the top-most component on both during the build process (SSR) and in the client-side JavaScript we add the `<Provider>` via the `wrapRootElement()` method in both `gatsby-ssr.js` and `gatsby-browser.js`.

## initialState.json

**This file contains the base state that should be used when Redux loads.** 

However, keep in mind that right after the initial state is loaded, localStorage is checked to determine whether a state has been saved from a previous session. If a saved state exists in localStorage then the saved state will override the value passed from `initialState.json` before the Redux is initialised.

Given that `localStorage` is user specific and can not be accessed during the build process (SSR) `initialState.json` will always (without exception) be the state when static content is built. 

Due to the latter it is import to only show user-specific UI information after the `componentDidMount` life-cycle hook (since we only have access to the saved user state then). It might be worthwhile building a 'loading' UI component to be built during SSR to indicate that the UI is still retrieving a previous saved state.

## index.js

**This file creates and exports the created Redux store.**

### Methods

In addition to several core Redux methods ([createStore](https://redux.js.org/api/createstore), [combineReducers](https://redux.js.org/api/combinereducers) and [applyMiddleware](https://redux.js.org/api/applymiddleware)) the following libraries are used to create the Redux store:

- [react‑redux](https://www.npmjs.com/package/react-redux)
- [redux‑devtools‑extension](https://www.npmjs.com/package/redux-devtools-extension)
- [redux‑thunk](https://www.npmjs.com/package/redux-thunk)
- [redux‑localstorage](https://www.npmjs.com/package/redux-localstorage)

To learn more about how they are used and their purpose, refer to the [Redux heading on the tech stack page](/src-redux-store-readme).

### localStorage

Since localStorage does not existing during the build process in NodeJS, a bit of conditional logic was added to only initialise localStorage if the store is created in the client-side. The following functions are used:

- `initLocalStorage()`: Contains the code that initialises localStorage in Redux
- `isNode`: Boolean value whethercode is currently running in NodeJS (and not the browser)
- `createEnhancers()`: If code is running in NodeJS does not add `initLocalStorage` to the list of enhancers.
