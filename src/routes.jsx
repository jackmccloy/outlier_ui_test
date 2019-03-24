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
        <Route exact path="/" component={Launches}/>
        <Route path="/Launches" component={Launches}/>
        <Route path="/Rockets" component={Rockets}/>
      </Switch>
    </Main>
  </Router>
);

export default Routes;
