import React, { Component } from 'react';
import { Matchday, Player, Home, League } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Home />
        <League />
      </div>
    );
  }
}

export default App;
