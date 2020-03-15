import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends React.Component {
  state = {
    showGamesPlayed: true
  };

  toggleGamesPlayedPanel = () =>
    this.setState(prevState => ({
      showGamesPlayed: !prevState.showGamesPlayed
    }));
  
  render() {
    const { showGamesPlayed } = this.state;
    const { users } = this.props;

    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide ' : 'Show '} the Number of Games Played
        </button>
      </div>
    );

    return (
      <div>
        <h1>Users</h1>
        { users && users.length > 0 ? gamesPlayedButton : null }
        <ol>
	      { users.map(user => (
              <User key={user.usernmae} user={user} showGamesPlayed={showGamesPlayed} />
          )) }
        </ol>
      </div>
    );
  }
}

UserList.propTypes = {
  user: PropTypes.array.isRequired
};

export default UserList;