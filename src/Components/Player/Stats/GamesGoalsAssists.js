import React, { Component } from 'react';
import './stats.css';

class GamesGoalsAssists extends Component {
    render() {
        const chosenStats = this.props.stats
        return (
            <div className="stats-container btn-group">
                <li id="stats-games" className="stats-goals-assists player-stats btn list-group-item list-group-item-action">
                    <p>Games</p>
                    <p>{chosenStats.games}</p>
                </li>
                <li id="stats-goals" className="stats-goals-assists player-stats btn list-group-item list-group-item-action">
                    <p>Goals</p>
                    <p>{chosenStats.goals}</p>
                </li>
                <li id="stats-assists" className="stats-goals-assists player-stats btn list-group-item">
                    <p>Assists</p>
                    <p>{chosenStats.assists}</p>
                </li>
            </div>
        );
  }
}

export default GamesGoalsAssists;