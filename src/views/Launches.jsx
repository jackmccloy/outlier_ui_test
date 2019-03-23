import React, { Component } from 'react';

import { connect } from "react-redux";

import styled from 'styled-components';

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

    const launches = launchCollection.launches.map(launch => (
        <Launch
          key={launch.flight_number}
          launch={launch}
        />
      )
    );

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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  dispatch
});

const ConnectedLaunchesView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LaunchesView);

export default ConnectedLaunchesView;
