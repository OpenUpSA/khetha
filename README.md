# 📋 Khetha

[![](https://badges.gitter.im/OpenUpSA/kheta.svg)](https://gitter.im/OpenUpSA/kheta?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![](https://travis-ci.org/OpenUpSA/kheta.svg?branch=master)](https://travis-ci.org/OpenUpSA/kheta) [![Netlify Status](https://api.netlify.com/api/v1/badges/f6f9212e-38e3-4a26-8998-9698b5b2bd08/deploy-status)](https://app.netlify.com/sites/kheta/deploys)

**Kheta is an open-source tool created in partnership with Social Surveys Africa to engagement in the 2019 national election**

## Contributor instructions:

### 🌱 1. Set up local environment
1. Clone repository by running `git clone https://help.github.com/OpenUpSA/khetha/`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Make sure you have the latest release of [Yarn](https://yarnpkg.com/en/docs/install) installed.
4. Run `yarn` in the root folder of the repository.

### 👓 2. Read our documentation
1. Please review the [branches](https://github.com/agis/git-style-guide) and [commits](https://github.com/agis/git-style-guide) sections in the following [documentation](https://github.com/agis/git-style-guide).
3. Please read the following [document outlinging Khetha's code-architecture](#).
4. Run `yarn start:docs` to review component/module level documentation as needed.

### ❤️ 3. Contribute
1. Create a new branch in accordance with the above (skip this step if you are contributing on a specific branch)
2. Make sure to do as many small commits as possible in accordance with [the above documentation].
3. If you are adding a new component/module make sure to follow the supplied [new component/module instructions](#).
4. If you are modifying an existing component make sure to develop against `yarn start:storybook` to sandbox components from business logic.
5. Make sure to run occasionally run `yarn test` to see introduced errors and confirm scope of changes.
6. If you have any questions about the above free to ask in [our core-team Slack workspace](https://openupsa.slack.com) or the following [Gitter channel](#).

### 🚀 3. Make a pull request
1. If you are making a public pull request (no write access) use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
2. If you are a project contributor (write access) use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the `master` branch.
4. The designated owner of the repository will automatically be tagged in all pull requests via the `docs/CODEOWNERS` file.
5. Once your code has been accepted and merged into `master` [Netlify](#netlify) will automatically deploy the changes to [khetha.org.zaa](http://khetha.org.za).
