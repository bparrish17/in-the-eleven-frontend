import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import './matchday.css';

class FollowedPlayer extends Component {
    render() {
        const {player} = this.props;
        const nat_team = "https://upload.wikimedia.org/wikipedia/commons/8/86/Crest_of_the_United_States_Soccer_Federation.png"
        return (
            <div>
                <div id="player-container" className="btn-group">
                    {/*<li id="nt-team-icon" className="btn list-group-item">
                        <img src={nat_team} className="team-icon-img img-fluid" alt="..."/>
                     </li>*/}
                    <li id="club-team-icon" className="btn list-group-item">
                        <img src={player.teamImage} className="team-icon-img img-fluid" alt="..."/>
                    </li>
                    <li id="name" className="player-info btn list-group-item list-group-item-action">
                        {player.name}
                    </li>
                    <li id="opponent" className="player-info btn list-group-item">{player.status}</li>
                    <li id="gametime" className="player-info btn list-group-item">{player.gametime}</li>
                </div>
                <div id="player-separator"></div>
            </div>
        );
    }
  }
  
  export default FollowedPlayer;