import React, { Component } from 'react';
import Matchday from './Matchday';
import Player from './Player';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Matchday />
      </div>
    );
  }
}

export default App;
