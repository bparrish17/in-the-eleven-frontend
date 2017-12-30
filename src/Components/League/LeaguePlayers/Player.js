import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './leagueplayers.css';

class Player extends Component {
    render() {
        const { player } = this.props;
        return (
            <div className="player">
                <div className="player-items rank first">{player.id+1}</div>
                <div className="btn player-items club-img">
                    <img src={player.clubImg} className="table-crest img-fluid" alt="..."/>
                </div>
                <div className="btn player-items nat-img">
                    <img src={player.natImg} className="table-crest img-fluid" alt="..."/>
                </div>
                <Link to={`/player`}>
                    <div className="btn player-items name">{player.name}</div>
                </Link>
                <Link to={`/teams/${player.teamId}`}>
                    <div className="btn player-items club-name">{player.team}</div>
                </Link>
                <div className="player-items stats">17</div>
                <div className="player-items stats">6</div>
                <div className="player-items stats last">3</div>
            </div>
        );
    }
}

export default Player;