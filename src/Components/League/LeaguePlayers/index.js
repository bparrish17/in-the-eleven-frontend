import React, { Component } from 'react';
import Header from '../../Matchday/Header'
import Player from './Player'
import { leaguePlayers } from '../../../testData'
import './leagueplayers.css';

class LeaguePlayers extends Component {
    render() {
        const { teams } = this.props;
        return (
            <div id="league-players-container" className="col-xs-6">
                <Header text="Players" />
                {leaguePlayers.map(player => <Player key={player.id} player={player}/>)}
            </div>
        );
    }
}

export default LeaguePlayers;