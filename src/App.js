import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddUser from './AddUser';
import UserList from './UserList';

class App extends Component {
  state = {
    users: []
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(prevState => ({
      users: [...prevState, user] 
    }));
  };

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser users={users} onAddUser={this.createContact} />
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
