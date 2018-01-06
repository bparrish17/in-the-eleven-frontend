import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './roster.css';

class RosterPlayer extends Component {
    render() {
        const { player } = this.props;
        if(!player.last_name) player.last_name = '';
        const position = {...player.position}
        const nationality = {...player.nationality}
        let flag = nationality.iso_two_code ? ''.concat(nationality.iso_two_code).toLowerCase() : false
        return (
            <div className="roster-player">
                <div className="btn roster-player-items roster-player-flag">
                    {flag 
                        ? <div id="table-flag" className={"flag-icon flag-icon-" + flag}></div>
                        : <div id="table-nation">N/A</div>
                    }
                </div>
                {/*<div className="roster-player-items roster-number first">{player.number}</div>*/}
                <div className="roster-player-items roster-position">{position.code}</div>
                {/*<div className="btn roster-player-items roster-club-img">
                    <img src={teamImg} className="table-crest img-fluid" alt="..."/>
                </div>*/}
                <Link to={`/teams/${player.team_id}/players/${player.id}`}>
                    <div className="btn roster-player-items roster-name">{player.first_name + ' ' + player.last_name}</div>
                </Link>
                <div className="btn roster-player-items roster-follow">Follow</div>
            </div>
        );
    }
}

export default RosterPlayer;