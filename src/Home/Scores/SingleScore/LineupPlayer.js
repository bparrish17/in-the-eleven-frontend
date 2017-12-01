import React, { Component } from 'react';
import './singlescore.css';

class LineupPlayer extends Component {
  render() {
    const { player, status } = this.props;
    return (
        <div className="lineup-player">
            <div>{player}</div>
            <div>{status}</div>
        </div>
    );
  }
}

export default LineupPlayer;