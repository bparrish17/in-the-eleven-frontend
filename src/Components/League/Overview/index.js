import React, { Component } from 'react';
import TeamDropdown from './TeamDropdown'
import PlayerSearchBar from './PlayerSearch'
import Media from 'react-media';
import './leagueoverview.css';

class LeagueOverview extends Component {
    render() {
        const { teams } = this.props;
        return (
            <div id="league-header"className="jumbotron jumbotron-fluid">
                <div id="league-image-container" className="ignore-mobile">
                    <img id="league-image" src='premierleague.png' alt="..." />
                </div>
                <div id="league-overview">
                    <h2 id="league-name" className="display-3">English Premier League</h2>
                    <div id="league-browse-container">
                        <TeamDropdown teams={teams} />
                        <PlayerSearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default LeagueOverview;