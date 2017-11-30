import React, { Component } from 'react';
import Matchday from './Matchday';
import Player from './Player';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Home />
      </div>
    );
  }
}

export default App;
