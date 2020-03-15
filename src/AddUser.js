import React from 'react';
import PropTypes from 'prop-types';

class AddUser extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  };

  contactExists = currentUsername => {
    const { users } = this.props;
    for (let user of users) {
      if (user.username === currentUsername)
        return true;
      return false;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const { user } = this.state;
    const userExists = this.contactExists(user.username);
    
    if (!userExists) this.props.onAddUser(user);
    this.setState({ userExists });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState(currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value
      } 
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === '' || lastName === '' || username === '';
  };

  render() {
    const { firstName, lastName, username } = this.state.user;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        { this.state.userExists ? (
           <p className="error">You cannot add a user that already exists.</p>
        ) : ''}
      </div>
    ); 
  }
}

AddUser.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default AddUser;