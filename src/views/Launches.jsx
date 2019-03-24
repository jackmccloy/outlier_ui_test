import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from "react-redux";

import styled from 'styled-components';

import { getLaunchesThunk } from "../actions/Launches";
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
    const { getLaunches } = this.props;
    getLaunches();
  }

  launchesArea() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING... </div>;
    }

    if (launchCollection.error) {
      return <div> { launchCollection.error } </div>
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = launchCollection.launches.map(launch => (
      <Launch
        key={launch.flight_number}
        launch={launch}
      />
    ));

    return <ul>{launches}</ul>;
  }

  render() {
    return (
      <Section>
        <LaunchesH1> SpaceX launches </LaunchesH1>
        {this.launchesArea()}
      </Section>
    );
  }
}

LaunchesView.propTypes = {
  launchCollection: PropTypes.shape({
    launches: PropTypes.arrayOf(PropTypes.shape({
      flight_number: PropTypes.number,
      mission_name: PropTypes.string,
      rocket: PropTypes.shape({
        rocket_id: PropTypes.string,
        rocket_name: PropTypes.string,
      }),
    })),
    fetching: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  getLaunches: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  launchCollection: state.launchCollection,
});

const mapDispatchToProps = {
  getLaunches: getLaunchesThunk,
};

const ConnectedLaunchesView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LaunchesView);

export default ConnectedLaunchesView;
