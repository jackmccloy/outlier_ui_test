import React, { Component } from 'react';

import styled from 'styled-components';

import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

const Section = styled.section`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const LaunchesH1 = styled.h1`
  margin-top: 0;
  border-bottom: 2px solid #999;
  color: #666;
`

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    for (let i = 0; i < launchCollection.launches.length; i+=1) {
      const launch = launchCollection.launches[i];

      launches.push(
        <Launch {...{
          key: launch.launch_id,
          launch
        }} />

      )
    }

    return <ul>{launches}</ul>;
  }

  render() {
    return (
      <Section>
        <LaunchesH1> SpaceX launches </LaunchesH1>
        {this.getContent()}
      </Section>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
