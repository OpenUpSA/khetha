---
name: gatsby-node
menu: Tooling

---

# gatsby-node

This folder contains all scripts and helpers to be used specifically in the `gatsby-node.js` file in the root.

The main activity that is handled in this folder is building the graphql query as specified in `src/tooling/gatsby-node/query.js` and then parsing the results into an array is easy to debug and requires minimal logic from Gatsby to transform into HTML pages.

_Note that everything is this folder is configured to run during build time in node. This means that [Common JS](https://en.wikipedia.org/wiki/CommonJS)  imports and/or exports are used instead of ES Module [imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/) and/or [exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)_

**Are you looking for a specific file?**

- [createArraysForTemplates.js](#createarraysfortemplatesjs)
- [query.js](#queryjs)
- [getFolderTranslations/index.js](#getfoldertranslationsindexjs)

## createArraysForTemplates.js

The file that starts the parsing of data received from GraphQL via the `data` property.

It starts out by removing all types that are not folders, and the passes the `data` property to `src/tooling/gatsby-node/parseListOfFolders` that return an array of objects with the following props each:

- **url**: The url where the page should be created
- **component**: The React component that should be used. In the the above case it will be the `src/templates/listOfFolders` component.
- **context**: All props that need to be passed to the template (and subsequently to the `src/views/ListOfFolders` view).

_Note that 'component' is removed in the unit test for simplicity's sake_

**Properties**

|Properties|type|required|default|description|
|---|---|---|---|---|
|data|object|true||This should be the data object returned from the GraphQL query.|

**Example**

```js
const data = {
  "allMarkdownRemark": {
    "edges": [
      {
        "node": {
          "frontmatter": {
            "type": "folder",
            "title": "Example 2",
            "icon": "Public",
            "translated_title": [
              {
                "language": "Afrikaans",
                "translation": "Voorbeeld 2"
              }
            ]
          }
        }
      },
      {
        "node": {
          "frontmatter": {
            "type": "question",
            "title": "",
            "icon": null,
            "translated_title": null,
            "translated_question_link": null,
            "translated_resource_link": null
          }
        }
      },
    ]
  }
}

console.log(createArraysForTemplates({ data }));
```

Console output:

```powershell
[
  {
    "context": {
      "folders": [
        [
          {
            "isFallback": false,
            "isoKey": "eng",
            "title": "Example 2",
            "url": "/eng/folders/example-2/index.html"
          }
        ],
        [
          {
            "isFallback": false,
            "isoKey": "eng",
            "title": "Example 1",
            "url": "/eng/folders/example-1/index.html"
          }
        ]
      ],
      "meta": {
        "isoKey": "eng",
        "urls": {
          "afr": { "url": "/afr/folders/index.html" },
          "eng": { "url": "/eng/folders/index.html" },
          "nso": { "url": "/nso/folders/index.html" },
          "por": { "url": "/por/folders/index.html" },
          "sot": { "url": "/sot/folders/index.html" },
          "spa": { "url": "/spa/folders/index.html" },
          "tsn": { "url": "/tsn/folders/index.html" },
          "xho": { "url": "/xho/folders/index.html" },
          "zul": { "url": "/zul/folders/index.html" }
        }
      }
    },
    "url": "/eng/folders/index.html"
  }
]
```

## query.js

This returns a function that can be run to fire the specific Gatsby build time GraphQL query. 

This query returns everything that is needed to build all HTML pages from the templates in `src/templates` and pass them the required props.

**Properties**

|Properties|type|required|default|description|
|---|---|---|---|---|
|grapql|function|true||You need to pass the `graphql` function exposed by `gatsy-node.js` during the `createPages` hook.|

## getFolderTranslations/index.js

**Examples**

Input:

```js
const languges = {
  "eng": "English",
  "afr": "Afrikaans",
  "spa": "Spanish",
  "xho": "Xhosa"
}


const translations = [
    {
    "language": "Afrikaans",
    "translation": "Voorbeeld 2"
  }
]

console.log(
  getFolderTranslations({ translations, languages, title: 'Example 1' })
)
```

Console output:

```powershell
[
  {
    "isFallback": false,
    "isoKey": "eng",
    "title": "Example 1",
    "url": "/eng/folders/example-1/index.html"
  },
  {
    "isFallback": false,
    "isoKey": "afr",
    "title": "Voorbeeld 1",
    "url": "/afr/folders/voorbeeld-1/index.html"
  },
  {
    "isFallback": true,
    "isoKey": "spa",
    "title": "Example 1",
    "url": "/spa/folders/example-1/index.html"
  },
  {
    "isFallback": true,
    "isoKey": "xho",
    "title": "Example 1",
    "url": "/xho/folders/example-1/index.html"
  }
]
```
