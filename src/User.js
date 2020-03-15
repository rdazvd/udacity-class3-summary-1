import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user, showGamesPlayed }) => (
  <li>
    <p>Username: { user.username }</p>
    <p>Number of games played: { showGamesPlayed ? user.numGamesPlayed : '*' }</p>
  </li>
);

User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default User;