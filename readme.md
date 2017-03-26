# Quantum blox - modular UI boilerplate in react

[![Build Status](https://travis-ci.org/metaphorical/quantum-blox.svg?branch=master)](https://travis-ci.org/metaphorical/quantum-blox)
[![bitHound Overall Score](https://www.bithound.io/github/metaphorical/quantum-blox/badges/score.svg)](https://www.bithound.io/github/metaphorical/quantum-blox)

## What is it

This is boilerplate for fully modular web UIs based on ReactJS and Redux + PostCSS with CSS Modules.

Builds are done by **Webpack**, which is connecting everything together, giving the technology that allows us to achieve full modularity and separation without any overhead. 

## Getting started with development

To start, clone the repo and

```
npm i 
```
## Dev build, watch and serve
To build dev code (unminified + sourcemaps)
```
npm run build: dev
```
To watch for changes and rebuild
```
npm run watch
```

## Hot module reload
work in progress... After migrating from webpack 1 to 2 I hat ot take step back and review

## Running tests
work in progress...

#Build size analysis
Guves you html page with zoomable tree view of how your depencencies influence your build size dependencies.
```
npm run build:analyze
``` 

## Production build
```
npm run build:Production
```
## Serving built data
To serve your App making it available at **[http://localhost:3000](http://localhost:3000)**
```
npm run serve-static
```
## GH pages deployment
Work in progress

## Check for updates
Provides you with a list of updates so you can choose if you want ot keep some of your dependencies up to date.
```
npm run check-updates
```

## Technologies

* [ReactJS](https://facebook.github.io/react/) 
* [Redux](http://redux.js.org/)
* [PostCSS](https://github.com/postcss)
* [Webpack](https://webpack.js.org/) 2

## Additional tools

* [React Router](https://github.com/ReactTraining/react-router) - client side routing
* [Redux-saga](https://redux-saga.github.io/redux-saga/) - CQRS sagas in Redux Middleware
* [LostGrid](http://lostgrid.org/docs.html#getting-started) - PostCSS grid system
* [Axios](https://github.com/mzabriskie/axios) - http 
* [Webpack build analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) - analyzing build size
* [NPM check updates](https://www.npmjs.com/package/npm-check-updates) - checking for updates

## Modularity and separation

## Real readme + demo and other goodies are coming up