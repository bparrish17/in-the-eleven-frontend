import React, { Component } from 'react';
import Scores from './Scores';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Scores />
      </div>
    );
  }
}

export default Home;