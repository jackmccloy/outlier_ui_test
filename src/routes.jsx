import React from 'react';

import styled from 'styled-components';

import {
  Route,
  Switch,
} from 'react-router';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Launches from './views/Launches';
import Rocket from './views/Rocket';
import Rockets from './views/Rockets';

import Navigation from './components/Navigation';

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 1400px;
`;

const Routes = () => (
  <Router>
    <Main>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Launches} />
        <Route path="/launches" component={Launches} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/rockets/:rocket_id" component={Rocket} />
      </Switch>
    </Main>
  </Router>
);

export default Routes;
