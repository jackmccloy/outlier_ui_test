import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from "react-redux";

import styled from 'styled-components';

import { getRocketsThunk } from "../actions/rockets";
import ImagesArea from '../components/ImagesArea';

const Section = styled.section`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const RocketH1 = styled.h1`
  margin-top: 0;
  border-bottom: 2px solid #999;
  color: #666;
`

class RocketView extends Component {
  componentDidMount() {
    const { getRockets } = this.props;
    getRockets();
  }

  render() {
    const {
      match,
      rocketCollection,
    } = this.props;

    if (!rocketCollection || rocketCollection.fetching) {
      return (
        <Section>
          <RocketH1> SpaceX </RocketH1>
          <div> LOADING... </div>
        </Section>
      );
    }

    if (rocketCollection.error) {
      return (
        <Section>
          <RocketH1> SpaceX </RocketH1>
          <div> { rocketCollection.error } </div>
        </Section>
      );
    }

    const rocketId = match.params.rocket_id;
    const thisRocket = rocketCollection.rockets.filter(rocket => rocket.rocket_id === rocketId);

    if (thisRocket.length !== 1) {
      return (
        <Section>
          <RocketH1> SpaceX </RocketH1>
          <div> NO DATA </div>
        </Section>
      );
    }

    return (
      <Section>
        <RocketH1> SpaceX { thisRocket[0].rocket_name } </RocketH1>
        <div> { thisRocket[0].description } </div>
        <ImagesArea
          title={thisRocket[0].rocket_name}
          images={thisRocket[0].flickr_images}
        />
      </Section>
    );
  }
}

RocketView.propTypes = {
  rocketCollection: PropTypes.shape({
    rockets: PropTypes.arrayOf(PropTypes.shape({
      rocket_id: PropTypes.string,
    })),
    fetching: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  getRockets: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      rocket_id: PropTypes.string,
    }),
  }).isRequired,
}

const mapStateToProps = state => ({
  rocketCollection: state.rocketCollection,
});

const mapDispatchToProps = {
  getRockets: getRocketsThunk,
};

const ConnectedRocketView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RocketView);

export default ConnectedRocketView;
