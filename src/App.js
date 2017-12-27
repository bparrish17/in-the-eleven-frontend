import React, { Component } from 'react';
import { Matchday, Player, Home } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Home />
        <Matchday />
      </div>
    );
  }
}

export default App;
