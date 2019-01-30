---
name: Introduction
route: /
order: 1
---

# Documentation

**The following set of documents aim to serve as guidelines for all open-source and official project contributors. Please review and consult this document regularly while contributing to the project.**

This page covers the following:
- [Getting Started](#getting-started)
- [Existing Code](#existing-code)
- [Documentating](#documentating)

## Getting Started

If this is your first time contributing to this project make sure to familiarise yourself with the following pages in the **Project Overview** section:

- ❤️ [Guidelines for all contributors](/docs-markdown-contributions)
- 🤖 [The entire tech stack used in this project](/docs-markdown-tech-stack)
- 🔌 [All third-party integrations used in this project](/docs-markdown-integrations)
- 🔨 [The conventions used to structure files and folders](/docs-markdown-file-structure)

Once you've reviewed all the above you can refer to the following sections as needed:


## Existing Code

Remaining sections respectively correspond to one of the following root folders in the `src/` directory. Please onsult the [conventions used to structure files and folders](/docs-markdown-file-structure) link above to understand what each of these folders are used for.

- **Assets**: `src/assets`
- **Components**: `src/components`
- **Config**: `src/config`
- **Templates**: `src/templates`
- **Data**: `src/data`
- **Docs**: `src/docs`
- **Helpers**: `src/helpers`
- **Pages**: `src/pages`
- **Redux**: `src/redux`
- **Templates** `src/templates`
- **Tooling**: `src/tooling`
- **Views**: `src/views`

## Documentating

### Adding/Modifying Documentation

Please try and incrementally add a bit of documentation in all your pull request. If you need another contributor to explain the purpose of a specific file/folder to you please ask them to do it by adding an explaination via a embedded `README.md` file so that further contributors can also benefit from the latter explaination.

### Stability

Each page should indicate the stability of the content/API described on it. Stability ratings are as follows:

|Badge|Description|
|---|---|
|![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)|This is a 'work in progress' and is not ready for use of any kind at this time.
|![stability-deprecated](https://img.shields.io/badge/stability-deprecated-red.svg)|Changes are planned. Do not rely on it. Use of the feature may cause warnings. Backwards compatibility should not be expected.
|![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)|This is new and may change or be removed in future versions. Please try it out and provide feedback. If it addresses a use-case that is important to you, tell the node core team.
|![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)|The API is in the process of settling, but has not yet had sufficient real-world testing to be considered stable. Backwards-compatibility will be maintained if reasonable.
|![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)|The API has proven satisfactory, but cleanup in the underlying code may cause minor changes. Backwards-compatibility is guaranteed.
|![stability-frozen](https://img.shields.io/badge/stability-frozen-brightgreen.svg)|This API has been tested extensively in production and is unlikely to ever have to change.
|![stability-frozen](https://img.shields.io/badge/stability-locked-blue.svg)|Unless serious bugs are found, this code will not ever change.

Markdown code for badges can be found at [https://github.com/orangemug/stability-badges](https://github.com/orangemug/stability-badges).