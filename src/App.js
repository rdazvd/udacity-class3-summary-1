import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddUSer from './AddUser';
import UserList from './UserList';



class App extends Component {
  state = {
    users
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      </div>
    );
  }
}

export default App;
