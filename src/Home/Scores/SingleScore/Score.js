import React, { Component } from 'react';
import './singlescore.css';

class Score extends Component {
  render() {
    const { home, away, time } = this.props;
    return (
        <div id="score" className="time-or-score">
            <div className="goals">{home}</div>
            <div id="ongoing-time">{time}</div>
            <div className="goals">{away}</div>
        </div>
    );
  }
}

export default Score;