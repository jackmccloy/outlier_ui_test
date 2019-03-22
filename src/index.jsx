import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import { Provider } from "react-redux";

import Routes from './routes'

import "../styles/base/_main.sass"  // Global styles
import "../styles/base/_common.sass"  // Global styles
import "../styles/_style.sass"  // Css-module styles

import store from "./stores/Root";

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    /* eslint-disable global-require */
    // Rule disabled as of 2019.03.22 because the alternative imo would've
    // involved significant changes to how hot module reloading is set up
    renderApp(require('./routes').default);
    /* eslint-enable global-require */
  })
}