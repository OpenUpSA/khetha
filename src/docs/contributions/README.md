---
name: Contributions
menu: Project Overview
---

# ❤️ Contributions

## Workflow

### 1. Local Development
- Clone repository by running `git clone https://github.com/OpenUpSA/pocket-reporter/`.
- Make sure you have the latest [NodeJS](https://nodejs.org/en/) installed.
- Run `npm install` in the root folder of the repository.
- Run `npm start` to spin up the development server.
- Open `localhost:8000` in your browser.

### 2. Making a Pull Request
- If you are making a public pull request (no write access) use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
- If you are a project contributor (write access) use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
- Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the `master` branch.
- The owner of the repository will automatically be tagged in pull requests via the `docs/CODEOWNERS` file.

### 3. Deployment
- Your code will be reviewed and merged if the project owner does not have any concerns.
- Once merged into `master` [Netlify](#netlify) will automatically deploy the changes to [pocket-reporter.netlify.com](http://pocket-reporter.netlify.com).