# 📋 Khetha

[![](https://badges.gitter.im/OpenUpSA/kheta.svg)](https://gitter.im/OpenUpSA/kheta?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![](https://travis-ci.org/OpenUpSA/kheta.svg?branch=master)](https://travis-ci.org/OpenUpSA/kheta) [![Netlify Status](https://api.netlify.com/api/v1/badges/f6f9212e-38e3-4a26-8998-9698b5b2bd08/deploy-status)](https://app.netlify.com/sites/kheta/deploys)

**Kheta is an open-source tool created in partnership with Social Surveys Africa to measure political engagement of youth during the 2019 national election**

## Contributor instructions:

_If you have any questions about the following instructions please get in touch with us via [our core-team Slack workspace](https://openupsa.slack.com) (if you have access) or send an email to [schalk@openup.org.za](mailto:schalk@openup.org.za)._

### 🌱 1. Set up local environment
1. Clone the repository by running `git clone https://github.com/OpenUpSA/khetha.git`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Make sure you have the latest release of [Yarn](https://yarnpkg.com/en/docs/install) installed.
4. Run `yarn` in the root folder of the repository to install all dependancies.

### 👓 2. Read our documentation
1. Please review our [general coding conventions](#), [folder structure](#), [technologies](#) and [integrations](#) in this project's [documentation].
2. If you will be adding a new feature, module or component please review our [adding to this project](#) documentation.
3. Consult documentation for [components](#), [data](#), [helpers](#), [redux](#) and [node scripts](#) as needed.

### ❤️ 3. Contribute
1. Commit your changes.
2. Make a pull request:
   - If you are making a public pull request (i.e. you do not have write access) use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
   - If you are a project contributor (.e. you have write access) use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
3. The designated owner of the repository will automatically be tagged in all pull requests via the `docs/CODEOWNERS` file.
4. Once your code has been accepted and merged into `master` [Netlify](#netlify) will automatically deploy the changes to [khetha.org.za](http://khetha.org.za).

## Roadmap

### Fix `yarn start` issues.

### Configure GraphQL in accordance with new data collections

### Complete documentation and testing

- components
  - global [0/8]
  - views [0/7]
- data
  - assets [1]
  - cms [0/5]
  - constants [0/2]
  - saved [0/3]
- documentation
  - folders [0/9]
  - integrations [?]
  - technology [?]
- helpers
  - design [0/2]
  - functions [0/8]
- redux
  - actions [0/5]
  - modules [0/2]
  - store [1]
- scripts
  - createGatsbyConfig [0/1]
  - initJestConfig [0/1]