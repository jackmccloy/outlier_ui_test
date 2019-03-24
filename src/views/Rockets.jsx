import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from "react-redux";

import styled from 'styled-components';

import { getRocketsThunk } from "../actions/rockets";
import Rocket from '../components/Rocket';

const Section = styled.section`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const RocketsH1 = styled.h1`
  margin-top: 0;
  border-bottom: 2px solid #999;
  color: #666;
`

class RocketsView extends Component {
  componentDidMount() {
    const { getRockets } = this.props;
    getRockets();
  }

  rocketsArea() {
    const { rocketCollection } = this.props;

    if (!rocketCollection || rocketCollection.fetching) {
      return (
        <div> LOADING... </div>
      );
    }

    if (rocketCollection.error) {
      return (
        <div> { rocketCollection.error } </div>
      );
    }

    if (!rocketCollection.rockets.length) {
      return (
        <div> NO DATA </div>
      );
    }

    const rockets = rocketCollection.rockets.map(rocket => (
      <Rocket
        key={rocket.rocket_id}
        rocket={rocket}
      />
    ));

    return (
      <ul>{rockets}</ul>
    );
  }

  render() {
    return (
      <Section>
        <RocketsH1> SpaceX rockets </RocketsH1>
        {this.rocketsArea()}
      </Section>
    );
  }
}

RocketsView.propTypes = {
  rocketCollection: PropTypes.shape({
    rockets: PropTypes.arrayOf(PropTypes.shape({
      rocket_id: PropTypes.string,
    })),
    fetching: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  getRockets: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  rocketCollection: state.rocketCollection,
});

const mapDispatchToProps = {
  getRockets: getRocketsThunk,
};

const ConnectedRocketsView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RocketsView);

export default ConnectedRocketsView;
