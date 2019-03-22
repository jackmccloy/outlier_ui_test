
<p align="center">
    <h3 align="center">Outlier UI Challenge<br></h3>
</p>


Welcome to the Outlier UI Developer Challenge.

This repo contains a small UI project written in React. Unfortunately it has many errors and 
outmoded coding practices, particularly in Launches.jsx, the components and the actions. The Layout, routing,
stores and services are more up to date, so don't waste too much of your time on them (although
feel free to give feedback or make fixes if you think significant improvements are possible and you want to take 
the time — but they're not necessarily intended to be in scope of the challenge.)

The repo is designed to be simple to start and run with just npm (or yarn) and any recent version of node.
It is built on webpack and uses the webpack development server, so all you should need to do is clone the 
repo and start the app in development mode with npm start and view it on port 7357. All the tools 
for writing tests and code should be included, but feel free to add additional dependencies if you find that
helps you.

While the app is written in React and Redux and basic knowledge of these frameworks may be helpful,
 this is not explicitly a test of your React knowledge, the changes do not
necessarily involve knowledge of the React lifecycle, but rather good front end development practices,
 efficient modern functional and object-oriented Javascript (ES6) as well as CSS or SASS specifically.
 While the code is intentionally a little dirty around the edges in the hopes you will show us how you would 
 clean it up, you should be able to follow the general react/redux and REST pattern for loading data and 
 outputting UI elements.

The app pulls data about launches from the public SpaceX api. 

**Your task** is to add a feature where clicking
on any given launch will load and display information about the rocket used in the launch including rendering
the images of the rocket referenced in the api. 

Feel free to add files, breakup components or modularize and generally clean up code. Following good
test-driven development, write tests around the classes and objects you change, ie, the actions,
components, and the Launches view as well as any new files you add. If you find it hard to test the react
components put more emphasis on simply testing the action and store/reducer code. Please make a little effort
to cleanly format the results in minimal but visually pleasing format. Place more emphasis on usability than
graphic design, code with the assumption that colors, borders and margins might change according to forthcoming
design requirements and your job is make a clean flexible and usable layout.

The development challenge is build against the space-x public REST API `https://documenter.getpostman.com/view/2025350/RWaEzAiG`
You should be able to easily find the information there make the call and extract the data needed.

Good Luck.

### What were using

* React 16
* Webpack 4
* React Router 4
* SASS
* Babel Cli
* Hot Module Reloading
* Jest 21 
* Enzyme 3 for testing

### Features

* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/seamusmalone/ui-test-base
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:7357/`


### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer
