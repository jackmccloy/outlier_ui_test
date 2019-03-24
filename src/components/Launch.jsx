import React from 'react';

import PropTypes from 'prop-types';

const Launch = ({ launch }) => (
  <li>
    <h2> { launch.mission_name } </h2>
    <div> { launch.rocket.rocket_name } </div>
    <div> { launch.rocket.rocket_id } </div>
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