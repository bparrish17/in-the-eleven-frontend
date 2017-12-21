import React, { Component } from 'react';
import { Matchday, Player, Home } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Home />
        <Player />
      </div>
    );
  }
}

export default App;
