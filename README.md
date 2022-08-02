# Single-spa utility

This is a utility project, which was bootstrapped with `vanilla js` with the help of [single-spa](https://single-spa.js.org/). This app serves shared data between `micro frontend apps`.


## Overview

This repo is used in conjunction with nine other repos listed below. Together they make up an application composed of microfrontends. Each app can be updated and deployed independently from the others.

- [**Root Config**](https://github.com/actionanand/single-spa-demo-root-config)
- [**Angular App**](https://github.com/actionanand/single-spa-angular)
- [**React App**](https://github.com/actionanand/single-spa-react)
- [**Vue App**](https://github.com/actionanand/single-spa-vue)
- [**Svelte App**](https://github.com/actionanand/single-spa-svelte)
- [**Nav Bar App**](https://github.com/actionanand/single-spa-nav)
- [**Footer App**](https://github.com/actionanand/single-spa-footer)
- [**404 App**](https://github.com/actionanand/single-spa-404)
- [**Utility App** (This Repo)](https://github.com/actionanand/single-spa-utility)

## Demo

You can find the demo here: [Single-Spa-Demo App](https://ar-single-spa-demo.herokuapp.com/)

## How to run this repo locally

```bash
yarn start
```

## How to build for production

```bash
yarn build:webpack
```

## How to create single-spa frontend app

```bash
npx create-single-spa
```

## How to serve raw github content as CDN

```
https://cdn.jsdelivr.net/gh/<github-username>/<github-repo-name@branch-name>/<filename>
```

## How It Works

This project uses [single-spa](https://single-spa.js.org/) to architect an app composed of `micro-frontends`. In the root config, the eight other microfrontend apps (such as angular, react, vue, and svelte) are registered with singe-spa. The main `index.ejs` file contains an import map, which references where to find the compiled JavaScript bundle for each microfrontend. [SystemJS](https://github.com/systemjs/systemjs) is the module loader which then loads the bundles when needed. Utility app serves shared data between other apps.


### NB

Each repo can be set up with [Travis CI](https://travis-ci.org/) for running jobs as part of a continuous integration pipeline. When new code is pushed to the master branch for any of the repos, the new code is compiled and then uploaded to AWS S3, which serves as a CDN. The CI job also updates the import map file to reference the new bundle for the updated project.

### Sources

- [How to Develop and Deploy Micro-Frontends with Single-SPA](https://www.freecodecamp.org/news/developing-and-deploying-micro-frontends-with-single-spa/)
- [Fun with Micro-frontend in a single-spa way](https://dev.to/nitinreddy3/fun-with-micro-frontend-in-a-single-spa-way-1iok)
- [Connect Micro frontends with the Single-Spa framework. Step by step guide.](https://obaranovskyi.medium.com/connecting-micro-frontends-with-the-single-spa-framework-step-by-step-guide-e7fa87306bc7)
- [RawGit](https://rawgit.com/)
- [Raw Github js file not loading (direct link) like CDN - stackoverflow](https://stackoverflow.com/questions/62901066/raw-github-js-file-not-loading-direct-link-like-cdn/)
- [How to deploy a React, Angular and Vue project to Github pages](https://deepinder.me/how-to-deploy-a-react-angular-vue-project-to-github-pages)