import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './leagueplayers.css';

class Player extends Component {
    render() {
        const { player } = this.props;
        const nationality = {...player.nationality}
        let flag = nationality.iso_two_code ? ''.concat(nationality.iso_two_code).toLowerCase() : false
        return (
            <div className="player">
                <div className="player-items rank first">{player.id+1}</div>
                <div className="btn mobile-ignore player-items club-img">
                    <img src={player.clubImg} className="table-crest img-fluid" alt="..."/>
                </div>
                <div className="mobile-ignore btn player-items nat-img">
                    {flag 
                        ? <div id="table-flag" className={"flag-icon flag-icon-" + flag}></div>
                        : <div id="table-nation">N/A</div>
                    }
                </div>
                <Link to={`/player`}>
                    <div className="btn player-items name">{player.name}</div>
                </Link>
                <Link to={`/teams/${player.teamId}`}>
                    <div className="btn player-items club-name">{player.team}</div>
                </Link>
                <div className="mobile-ignore player-items stats">17</div>
                <div className="mobile-ignore player-items stats">6</div>
                <div className="mobile-ignore player-items stats last">3</div>
            </div>
        );
    }
}

export default Player;