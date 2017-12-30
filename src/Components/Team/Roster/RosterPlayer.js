import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './roster.css';

class RosterPlayer extends Component {
    render() {
        const { player, teamImg } = this.props;
        console.log('player', player)
        return (
            <div className="roster-player">
                <div className="player-items rank first">{player.number}</div>
                <div className="btn player-items club-img">
                    <img src={teamImg} className="table-crest img-fluid" alt="..."/>
                </div>
                <Link to={`/player`}>
                    <div className="btn player-items name">{player.first_name + ' ' + player.last_name}</div>
                </Link>
                <div className="player-items follow last">
                    <button type="button" className="btn btn-secondary">Follow</button>
                </div>
            </div>
        );
    }
}

export default RosterPlayer;