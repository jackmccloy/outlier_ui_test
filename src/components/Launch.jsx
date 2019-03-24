import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Launch = ({ launch }) => (
  <li>
    <h2>Mission: <Link to={`/launches/${launch.flight_number}`}>
      { launch.mission_name }
    </Link></h2>
    <div> Rocket: <Link to={`/rockets/${launch.rocket.rocket_id}`}>
      { launch.rocket.rocket_name }
    </Link></div>
  </li>
);

Launch.propTypes = {
  launch: PropTypes.shape({
    // Todo: This is not the full description of the data - it only includes
    // the fields that we currently use.
    flight_number: PropTypes.number,
    mission_name: PropTypes.string,
    rocket: PropTypes.shape({
      rocket_id: PropTypes.string,
      rocket_name: PropTypes.string,
    }),
  }).isRequired,
}

export default Launch;