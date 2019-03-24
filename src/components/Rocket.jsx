import React from 'react';

import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <li>
    <h2> { rocket.rocket_name } </h2>
  </li>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    // Todo: This is not the full description of the data - it only includes
    // the fields that we currently use.
    rocket_name: PropTypes.string,
  }).isRequired,
}

export default Rocket;