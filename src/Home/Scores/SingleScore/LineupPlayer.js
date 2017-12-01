import React, { Component } from 'react';
import './singlescore.css';

class LineupPlayer extends Component {
  render() {
    const { name, value } = this.props;
    return (
        <li className="lineup-player list-group-item">
            <div>{name}</div>
            <div>{value}</div>
        </li>
    );
  }
}

export default LineupPlayer;