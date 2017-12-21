import React, { Component } from 'react';
import './singlescore.css';

class Time extends Component {
  render() {
    const { time } = this.props;
    return (
        <div id="time" className="time-or-score">
            { time }
        </div>
    );
  }
}

export default Time;