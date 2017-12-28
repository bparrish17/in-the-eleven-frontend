import React, { Component } from 'react';
import TeamDropdown from './TeamDropdown'
import './leagueoverview.css';

class LeagueOverview extends Component {
    render() {
        const { teams } = this.props;
        return (
            <div id="league-header"className="jumbotron jumbotron-fluid">
                <div id="league-image-container">
                    <img id="league-image" src='premierleague.png' alt="..." />
                </div>
                <div id="league-overview">
                    <h2 id="league-name" className="display-3">English Premier League</h2>
                    <TeamDropdown teams={teams} />
                </div>
            </div>
        );
    }
}

export default LeagueOverview;