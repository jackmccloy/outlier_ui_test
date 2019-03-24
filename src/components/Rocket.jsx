import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Rocket = ({ rocket }) => (
  <li>
    <h2>
      <Link to={`/rockets/${rocket.rocket_id}`}>
        { rocket.rocket_name }
      </Link>
    </h2>
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