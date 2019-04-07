# 📡 Data

**In short, the `/src/data` folder is essentially a flat-file database that can be access during project build time (when webpack runs).**

Two types of files are usually stored in `/src/data/`. These are: `.json` and `.md`. In addition, the type of content that gets saved in `/src/data/` can be broken down into one of the following:

- [Flat-file database](#flat-file-database)
- [Constants](#constants)

## Flat-file database

*NOTE: Please proceed straight to the Hardcoded Data section if you project is not using GatsbyJS*

The most common use case is to store either `.md` (with front-matter) or `.json` files inside `/src/data` in respective sub-folders. For example `/src/data/posts` with `.md` files and/or `/src/data/categories` with `.json` files. If the project is using Gatsby these can be accessed via GraphQL. For example with the following query:

```graphql
{
  categories: allCategoriesJson {
    edges {
      nodes {
        id,
        name,
        image,
      }
    }
  },
  posts: allMarkdownRemark {
    edges {
      nodes {
        frontmatter {
          title,
        }
        id,
        html,
      }
    }
  }
}
```

Furthermore you can create relationships between these by including the following in the `gatsby-config.js`:

```js
module.exports = {
  mapping: {
  'allCategoriesJson.posts': 'allMarkdownRemark.frontmatter.id',
  'allMarkdownRemark.frontmatter.category': 'allCategoriesJson.id',
  }
}
```

The above creates a two way mapping between two types of data (posts and categories). This means that we do the following query in GraphQL:

```graphql
{
  categories: allCategoriesJson {
    edges {
      nodes {
        categories,
      }
    }
  },
  posts: allMarkdownRemark {
    edges {
      nodes {
        frontmatter {
          posts,
        }
      }
    }
  }
}
```

## Constants

*NOTE: Constants should only go into `/src/data` if they are used in more than one module. If they are only used in one module then they can be placed in a `data.json` file inside the module. For example `/src/helpers/calculateValueAddedTax/data.json`.*

Since Webpack 3, we can actually import `.json` straight into JavaScript files. This means that we can load the JSON as ES Modules (if you know the path, for example `import languages from '../../data/categories/animals.json'`).

This is helpful if you want to for example store a list of the languages used in this project and the isoKeys :

`/src/data/hardcoded/langauges.json`
```json
{
  "eng": "English",
  "afr": "Afrikaans",
  "spa": "Spanish",
  "xho": "Xhosa",
  "nso": "Northern Sotho",
  "por": "Portuguese",
  "sot": "Southern Sotho",
  "tsn": "Tswana",
  "zul": "Zulu"
}
```

The above is useful if you don't have GatsbyJS in your stack or you just want to pull the data in directly without booting up the entire Gatsby GraphQL process just to retrieve the above. 