import React, { Component } from 'react';
import Header from '../../Matchday/Header'
import Player from './Player'
import { leaguePlayers } from '../../../testData'
import './leagueplayers.css';

class LeaguePlayers extends Component {
    constructor() {
        super();
        this.state = { chosenPlayers: 'all' }
        this.choosePlayers = this.choosePlayers.bind(this);
    }
    choosePlayers() {
        console.log('toggle')
    }
    
    render() {
        const { teams } = this.props;
        return (
            <div id="league-players-container" className="col-6 col-sm-6">
                <div id="gameday-header-container">
                    <text>Players</text>
                    <div className="header-tabs">
                        <button className="header-tabs-btns btn btn-default" onClick={() => this.choosePlayers('following')}><text>Following</text></button>
                    </div>
                    <div className="header-tabs">
                        <button className="header-tabs-btns btn btn-default" onClick={() => this.choosePlayers('all')}><text>All Players</text></button>
                    </div>
                    <div id="player-separator"></div>
                </div>
                {leaguePlayers.map(player => <Player key={player.id} player={player}/>) }
            </div>
        );
    }
}

export default LeaguePlayers;