import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i am your daddy!</h1>
        <p>This is already working</p>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
