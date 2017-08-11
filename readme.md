# Daffodil Digital

<img src="static/logo.jpeg" width="300" height="300" />

> Helping brands tell their stories in smarter ways

[![GitHub issues](https://img.shields.io/github/issues/acidjazz/daffodil.svg)](https://github.com/acidjazz/daffodil/issues)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/acidjazz/daffodil/master/license)
[![CircleCI](https://img.shields.io/circleci/project/github/acidjazz/daffodil.svg)](https://circleci.com/gh/acidjazz/daffodil/)
[![Dependency Status](https://gemnasium.com/badges/github.com/acidjazz/daffodil.svg)](https://gemnasium.com/github.com/acidjazz/daffodil)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)

## Development

master | staging
--- | ---
[![CircleCI](https://circleci.com/gh/acidjazz/daffodil/tree/master.svg?style=svg)](https://circleci.com/gh/acidjazz/daffodil/tree/master) | [![CircleCI](https://circleci.com/gh/acidjazz/daffodil/tree/staging.svg?style=svg)](https://circleci.com/gh/acidjazz/daffodil/tree/staging)

## Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/daffodil.git
```
* Install dependencies
```bash
yarn install
```
* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```
> To serve to other machines via your IP address run `yarn dev-public`

## Deployment
* All deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/acidjazz/waa)
 * Branch [staging](https://github.com/acidjazz/waa/tree/staging) merges deploy to http://staging.weareapartments.org/
 * Branch [master](https://github.com/acidjazz/waa/tree/master) merges deploy to http://weareapartments.org/

