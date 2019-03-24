import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from "react-redux";

import styled from 'styled-components';

import { getLaunchesThunk } from "../actions/launches";
import ImagesArea from '../components/ImagesArea';

const Section = styled.section`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const LaunchH1 = styled.h1`
  margin-top: 0;
  border-bottom: 2px solid #999;
  color: #666;
`

class LaunchView extends Component {
  componentDidMount() {
    const { getLaunches } = this.props;
    getLaunches();
  }

  render() {
    const {
      match,
      launchCollection,
    } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return (
        <Section>
          <LaunchH1> SpaceX </LaunchH1>
          <div> LOADING... </div>
        </Section>
      );
    }

    if (launchCollection.error) {
      return (
        <Section>
          <LaunchH1> SpaceX </LaunchH1>
          <div> { launchCollection.error } </div>
        </Section>
      );
    }

    const launchId = parseInt(match.params.flight_number, 10);
    const thisLaunch = launchCollection.launches.filter(launch => launch.flight_number === launchId);

    if (thisLaunch.length !== 1) {
      return (
        <Section>
          <LaunchH1> SpaceX </LaunchH1>
          <div> NO DATA </div>
        </Section>
      );
    }

    return (
      <Section>
        <LaunchH1> SpaceX { thisLaunch[0].mission_name }, {thisLaunch[0].launch_year}</LaunchH1>
        <h2> Rocket: <Link to={`/rockets/${thisLaunch[0].rocket.rocket_id}`}>
          { thisLaunch[0].rocket.rocket_name }</Link>
        </h2>
        <div> { thisLaunch[0].details } </div>
        <ImagesArea
          title={thisLaunch[0].mission_name}
          images={thisLaunch[0].links.flickr_images}
        />
      </Section>
    );
  }
}

LaunchView.propTypes = {
  launchCollection: PropTypes.shape({
    launches: PropTypes.arrayOf(PropTypes.shape({
      flight_number: PropTypes.string.isRequired,
      mission_name: PropTypes.string,
      launch_year: PropTypes.string,
      details: PropTypes.string,
      rocket: PropTypes.shape({
        rocket_id: PropTypes.string,
        rocket_name: PropTypes.string,
      }),
      links: PropTypes.shape({
        flickr_images: PropTypes.arrayOf(PropTypes.string),
      }),
    })),
    fetching: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  getLaunches: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      flight_number: PropTypes.string,
    }),
  }).isRequired,
}

const mapStateToProps = state => ({
  launchCollection: state.launchCollection,
});

const mapDispatchToProps = {
  getLaunches: getLaunchesThunk,
};

const ConnectedLaunchView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LaunchView);

export default ConnectedLaunchView;
